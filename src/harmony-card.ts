import { CallServiceActionConfig } from 'custom-card-helpers/dist';
import { LitElement, html, customElement, property, TemplateResult, css, PropertyValues, internalProperty } from 'lit-element';
import {
    HomeAssistant,
    hasAction,
    ActionHandlerEvent,
    handleAction,
    LovelaceCardEditor,
    getLovelace,
    hasConfigOrEntityChanged
} from 'custom-card-helpers';

import { styleMap, StyleInfo } from 'lit-html/directives/style-map';

import 'fa-icons';
import sharedStyle from './sharedStyle';

import './editor';

import { HarmonyCardConfig, HarmonyActivityConfig, HarmonyButtonConfig } from './types';
import { actionHandler } from './action-handler-directive';
import { CARD_VERSION, DEFAULT_BUTTONS } from './const';

import { localize } from './localize/localize';

import * as deepmerge from 'deepmerge';

/* eslint no-console: 0 */
console.info(
    `%c  HARMONY-CARD \n%c  ${localize('common.version')} ${CARD_VERSION}    `,
    'color: orange; font-weight: bold; background: black',
    'color: white; font-weight: bold; background: dimgray',
);

@customElement('harmony-card')
export class HarmonyCard extends LitElement {
    public static async getConfigElement(): Promise<LovelaceCardEditor> {
        return document.createElement('harmony-card-editor') as LovelaceCardEditor;
    }

    public static getStubConfig(): object {
        return {};
    }

    // TODO Add any properities that should cause your element to re-render here
    @property() public hass?: HomeAssistant;
    @internalProperty() private config!: HarmonyCardConfig;

    public setConfig(config: HarmonyCardConfig): void {
        // TODO Check for required fields and that they are of the proper format
        if (!config || config.show_error) {
            throw new Error(localize('common.invalid_configuration'));
        }

        if (!config.entity || config.entity.split('.')[0] !== 'remote') {
            throw new Error('Specify an entity from within the remote domain for a harmony hub.');
        }

        if (config.test_gui) {
            getLovelace().setEditMode(true);
        }

        this.config = {
            name: '',
            ...config,
        };
    }

    protected preventBubbling(e) {
        // e.preventDefault();
        e.stopPropagation();
        e.cancelBubble = true;
    }

    protected deviceCommand(e, device: string | undefined, cmd: string) {
        this.preventBubbling(e);

        if (null == device) {
            return;
        }

        this.hass?.callService("remote", "send_command", { entity_id: this.config?.entity, command: cmd, device: device });
    }

    protected harmonyCommand(e, activity: string) {
        this.preventBubbling(e);

        if (null == activity || activity == "off" || activity == 'turn_off') {
            this.hass?.callService("remote", "turn_off", { entity_id: this.config?.entity });
        }
        else {
            this.hass?.callService("remote", "turn_on", { entity_id: this.config?.entity, activity: activity });
        }
    }

    protected volumeCommand(e, command: string, attributes?: any) {
        this.preventBubbling(e);

        if (this.config?.volume_entity) {

            var baseAttributes = { entity_id: this.config?.volume_entity };

            this.hass?.callService("media_player", command, Object.assign(baseAttributes, attributes || {}));
        }
    }
    // https://lit-element.polymer-project.org/guide/lifecycle#shouldupdate
    protected shouldUpdate(changedProps: PropertyValues): boolean {
        if (!this.config) {
            return false;
        }

        return hasConfigOrEntityChanged(this, changedProps, false);
    }

    protected render(): TemplateResult | void {
        if (!this.config || !this.hass) {
            return html``;
        }

        // TODO Check for stateObj or other necessary things and render a warning if missing
        if (this.config.show_warning) {
            return html`
        <ha-card>
          <div class="warning">${localize('common.show_warning')}</div>
        </ha-card>
      `;
        }

        var hubState = this.hass.states[this.config.entity];

        var hubPowerState = hubState.state;
        var currentActivity = hubState.attributes.current_activity;

        var currentActivityConfig = this.config.activities.find(activity => activity.name === currentActivity);
        var currentDevice = currentActivityConfig?.device;

        var buttonConfig = this.computeButtonConfig(this.config, currentActivityConfig);

        return html`
      <ha-card
        style=${this.computeStyles()}
        .header=${this.config.name}
        tabindex="0"
        aria-label=${`Harmony: ${this.config.entity}`}
      >
        <div class="card-content">
            ${this.renderActivityButtons(this.config, hubPowerState, currentActivity)}

            ${this.renderVolumeControls(this.hass, this.config, buttonConfig, currentActivityConfig)}

            ${this.renderKeyPad(this.config, buttonConfig, currentActivityConfig, currentDevice)}

            <div class="play-pause">
                ${this.renderIconButton(buttonConfig['skip_back'], currentDevice)}
                ${this.renderIconButton(buttonConfig['play'], currentDevice)}
                ${this.renderIconButton(buttonConfig['pause'], currentDevice)}
                ${this.renderIconButton(buttonConfig['skip_forward'], currentDevice)}
            </div>

            <div class="remote">
                ${this.renderIconButton(buttonConfig['dpad_left'], currentDevice, { 'grid-column': '1', 'grid-row': '2' })}
                ${this.renderIconButton(buttonConfig['dpad_right'], currentDevice, { 'grid-column': '3', 'grid-row': '2' })}
                ${this.renderIconButton(buttonConfig['dpad_up'], currentDevice, { 'grid-column': '2', 'grid-row': '1' })}
                ${this.renderIconButton(buttonConfig['dpad_down'], currentDevice, { 'grid-column': '2', 'grid-row': '3' })}
                ${this.renderIconButton(buttonConfig['dpad_center'], currentDevice, { 'grid-column': '2', 'grid-row': '2' })}        
            </div>        

            <div class="xbox-buttons">
                ${this.renderIconButton(buttonConfig['xbox'], currentDevice, { 'grid-column': '1', 'grid-row': '2' })}
                ${this.renderIconButton(buttonConfig['back'], currentDevice, { 'grid-column': '2', 'grid-row': '2' })}
                ${this.renderIconButton(buttonConfig['a'], currentDevice, { 'grid-column': '4', 'grid-row': '2' })}
                ${this.renderIconButton(buttonConfig['b'], currentDevice, { 'grid-column': '5', 'grid-row': '2' })}
                ${this.renderIconButton(buttonConfig['x'], currentDevice, { 'grid-column': '6', 'grid-row': '2' })}        
                ${this.renderIconButton(buttonConfig['y'], currentDevice, { 'grid-column': '7', 'grid-row': '2' })}        
            </div>
        </div>
      </ha-card>
    `;
    }

    private renderActivityButtons(config: HarmonyCardConfig, hubPowerState: string, currentActivity: string) {
        if (typeof config.hide_activities !== 'undefined' && config.hide_activities) {
            return html``;
        }
        const iconClass = config.show_activities_icons ? 'activities-icons' : '';
        return html`
        <div class="activities ${iconClass}">
            ${this.renderActivityButton(hubPowerState === 'off', 'turn_off', 'off', config.show_activities_icons, 'mdi:power')}
            ${config.activities.map(
              activity => html`
                ${this.renderActivityButton(
                currentActivity === activity.name,
                activity.name,
                activity.name,
                config.show_activities_icons,
                activity.icon,
              )}
              `,
            )}
        </div>
    `;
    }

    private renderActivityButton(outlined: boolean, command: string, label: string, showIcon = false, icon?: string,): TemplateResult {
        return html`
           ${showIcon && icon
              ? html`
              <ha-icon-button
                icon="${icon}"
                ?outlined="${outlined}"
                @click="${e => this.harmonyCommand(e, command)}"
                @touchstart="${e => this.preventBubbling(e)}"
              ></ha-icon-button>
            `
             : html`
              <mwc-button
                ?outlined="${outlined}"
                label="${label}"
                @click="${e => this.harmonyCommand(e, command)}"
                @touchstart="${e => this.preventBubbling(e)}"
              ></mwc-button>        
            `}
        `;
    }

    private renderKeyPad(config: HarmonyCardConfig, buttonConfig: { [key: string]: HarmonyButtonConfig }, currentActivityConfig: HarmonyActivityConfig | undefined, device?: string) {
        if (typeof currentActivityConfig?.hide_keyPad != 'undefined' && !currentActivityConfig?.hide_keyPad) {
            return this.renderKeyPadButton(buttonConfig, device);
        }
        else if (typeof config.hide_keyPad != 'undefined' && !config.hide_keyPad) {
            return this.renderKeyPadButton(buttonConfig, device);
        }

        return html``;
    }

    private renderKeyPadButton(buttonConfig: { [key: string]: HarmonyButtonConfig }, device?: string) {
        return html`
        <div class="remote">
            ${this.renderIconButton(buttonConfig['1'], device, { 'grid-column': '1', 'grid-row': '1' })}
            ${this.renderIconButton(buttonConfig['2'], device, { 'grid-column': '2', 'grid-row': '1' })}
            ${this.renderIconButton(buttonConfig['3'], device, { 'grid-column': '3', 'grid-row': '1' })}
            ${this.renderIconButton(buttonConfig['4'], device, { 'grid-column': '1', 'grid-row': '2' })}
            ${this.renderIconButton(buttonConfig['5'], device, { 'grid-column': '2', 'grid-row': '2' })}    
            ${this.renderIconButton(buttonConfig['6'], device, { 'grid-column': '3', 'grid-row': '2' })}
            ${this.renderIconButton(buttonConfig['7'], device, { 'grid-column': '1', 'grid-row': '3' })}    
            ${this.renderIconButton(buttonConfig['8'], device, { 'grid-column': '2', 'grid-row': '3' })}
            ${this.renderIconButton(buttonConfig['9'], device, { 'grid-column': '3', 'grid-row': '3' })}
            ${this.renderIconButton(buttonConfig['0'], device, { 'grid-column': '2', 'grid-row': '4' })}
        </div> 
        `;
    }

    private renderIconButton(buttonConfig: HarmonyButtonConfig, device?: string, styles?: StyleInfo) {
        if (buttonConfig.hide === true) {
            return html``;
        }

        var buttonStyles = Object.assign(styles || {}, { color: buttonConfig.color });

        return html`
            <ha-icon-button
                icon="${buttonConfig.icon}"
                style="${styleMap(buttonStyles)}"
                @action=${e => this._handleButtonAction(e, buttonConfig, buttonConfig.device || device, buttonConfig.command || '')}
                .actionHandler=${actionHandler({
                    hasHold: hasAction(buttonConfig.hold_action),
                    hasDoubleClick: hasAction(buttonConfig.double_tap_action),
                    repeat: buttonConfig.hold_action?.repeat,
                })}
                >
            </ha-icon-button>
        `;
    }

    private renderVolumeControls(hass: HomeAssistant, config: HarmonyCardConfig, buttonConfig: { [key: string]: HarmonyButtonConfig }, currentActivityConfig: HarmonyActivityConfig | undefined) {
        if (currentActivityConfig?.volume_entity) {
            return this.renderMediaPlayerVolumeControls(hass, currentActivityConfig?.volume_entity, buttonConfig);
        }
        else if (currentActivityConfig?.volume_device) {
            return this.renderDeviceVolumeControls(currentActivityConfig?.volume_device, buttonConfig);
        }
        else if (config.volume_entity) {
            return this.renderMediaPlayerVolumeControls(hass, config.volume_entity, buttonConfig);
        }
        else if (config.volume_device) {
            return this.renderDeviceVolumeControls(config.volume_device, buttonConfig);
        }

        return html``;
    }

    private renderMediaPlayerVolumeControls(hass: HomeAssistant, volumeMediaPlayer: string, buttonConfig: { [key: string]: HarmonyButtonConfig }) {
        var volume_state = hass.states[volumeMediaPlayer];

        var volume = volume_state.attributes.volume_level;
        var muted = volume_state.attributes.is_volume_muted;

        var volumeDownStyle = Object.assign({} as StyleInfo, { color: buttonConfig['volume_down'].color });
        var volumeUpStyle = Object.assign({} as StyleInfo, { color: buttonConfig['volume_up'].color });
        var volumeMuteStyle = Object.assign({} as StyleInfo, { color: buttonConfig['volume_mute'].color });

        return html`
            <div class="volume-controls">
            ${this.renderIconButton(buttonConfig['volume_down'], volumeMediaPlayer, volumeDownStyle)}
            ${this.renderIconButton(buttonConfig['volume_up'], volumeMediaPlayer, volumeUpStyle)}
                <paper-slider
                    @change=${e => this.volumeCommand(e, 'volume_set', { volume_level: e.target.value / 100 })}
                    @click=${e => e.stopPropagation()}
                    @touchstart="${e => this.preventBubbling(e)}"
                    ?disabled=${muted}
                    min=0 max=100
                    value=${volume * 100}
                    dir=${'ltr'}
                    ignore-bar-touch pin>
                </paper-slider>
            ${this.renderIconButton(buttonConfig['volume_down'], volumeMediaPlayer, volumeMuteStyle)}
            </div>`;
    }

    private renderDeviceVolumeControls(device: string, buttonConfig: { [key: string]: HarmonyButtonConfig }) {
        return html`
            <div class="volume-controls">
                ${this.renderIconButton(buttonConfig['volume_down'], device)}
                ${this.renderIconButton(buttonConfig['volume_up'], device)}
                ${this.renderIconButton(buttonConfig['volume_mute'], device)}
            </div>`;
    }

    private _handleAction(ev: ActionHandlerEvent): void {
        if (this.hass && this.config && ev.detail.action) {
            console.log('ROOT', ev.detail.action);
            handleAction(this, this.hass, this.config, ev.detail.action);
        }
    }

    private _handleButtonAction(ev: ActionHandlerEvent, config: HarmonyButtonConfig, device: string | undefined, command: string | undefined): void {
        this.preventBubbling(ev);
        if (this.hass && config && ev.detail.action) {
            console.log('BTN', ev.detail.action);
            switch (ev.detail.action) {
                case 'tap':
                    const actionData: CallServiceActionConfig = {
                        action: 'call-service',
                        service: 'remote.send_command',
                        service_data: {
                            entity_id: this.config.entity,
                            command: command,
                            device: device,
                        },
                    }
                    config.tap_action = config.tap_action ? config.tap_action : actionData;
                    handleAction(this, this.hass, config, ev.detail.action);
                    break;
                default:
                    handleAction(this, this.hass, config, ev.detail.action);
                    break;
            }

        }
    }

    private computeStyles() {
        var scale = this.config?.scale || 1;

        return styleMap({
            '--mmp-unit': `${40 * scale}px`,
            '--mdc-icon-size': `${24 * scale}px`
        });
    }

    private computeButtonConfig(config: HarmonyCardConfig, currentActivityConfig?: HarmonyActivityConfig): { [key: string]: HarmonyButtonConfig } {
        // overwrite in the card button config
        let buttonConfig = deepmerge.default(DEFAULT_BUTTONS, config.buttons || {});

        // layer in the activity button config
        if (currentActivityConfig) {
            buttonConfig = deepmerge.default(buttonConfig, currentActivityConfig.buttons || {});
        }
        if (currentActivityConfig?.volume_entity) {
            buttonConfig = this.computeVolumeBtnConfig(buttonConfig, currentActivityConfig.volume_entity, 'media');
        }
        else if (currentActivityConfig?.volume_device) {
            buttonConfig = this.computeVolumeBtnConfig(buttonConfig, currentActivityConfig.volume_device, 'remote');
        }
        else if (config.volume_entity) {
            buttonConfig = this.computeVolumeBtnConfig(buttonConfig, config.volume_entity, 'media');
        }
        else if (config.volume_device) {
            buttonConfig = this.computeVolumeBtnConfig(buttonConfig, config.volume_device, 'remote');
        }
        return buttonConfig;
    }

    private computeVolumeBtnConfig(buttonConfig: { [key: string]: HarmonyButtonConfig }, device: string, mode: string): { [key: string]: HarmonyButtonConfig } {
        buttonConfig['volume_down'].tap_action = this.getAction(mode, buttonConfig, 'volume_down', device, false);
        buttonConfig['volume_down'].hold_action = this.getAction(mode, buttonConfig, 'volume_down', device, true);
        buttonConfig['volume_up'].tap_action = this.getAction(mode, buttonConfig, 'volume_up', device, false);
        buttonConfig['volume_up'].hold_action = this.getAction(mode, buttonConfig, 'volume_up', device, true);
        buttonConfig['volume_mute'].tap_action = this.getAction(mode, buttonConfig, 'volume_mute', device, false);
        return buttonConfig;
    }

    private getAction(mode: string, buttonConfig: { [key: string]: HarmonyButtonConfig }, name: string, device: string, repeat = false ): CallServiceActionConfig {
        const service_data: any = {
            entity_id: mode === 'remote' ? this.config.entity : device,
        };
        if (mode === 'remote') {
            service_data.command = buttonConfig[name].command;
            service_data.device = device;
        }
        const actionData: CallServiceActionConfig = {
            action: 'call-service',
            service: mode === 'remote' ? 'remote.send_command' : `media_player.${name}`,
            service_data: service_data
        }
        if (repeat) {
            actionData.repeat = 500;
        }
        return actionData;
    }

    static get styles() {
        return [
            css`
            .warning {
                display: block;
                color: black;
                background-color: #fce588;
                padding: 8px;
            }
            
            div {
                font-size:16px;
            }`,
            sharedStyle
        ];

    }
}
