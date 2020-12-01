import { directive, PropertyPart } from 'lit-html';

import { ActionHandlerDetail, ActionHandlerOptions } from 'custom-card-helpers/dist/types';
import { fireEvent } from 'custom-card-helpers';
import { deepEqual } from './deep-equal';

const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

interface ActionHandler extends HTMLElement {
    holdTime: number;
    bind(element: Element, options): void;
}
interface ActionHandlerElement extends HTMLElement {
    actionHandler?: {
        options: ActionHandlerOptionsExtra;
        start?: (ev: Event) => void;
        end?: (ev: Event) => void;
        handleEnter?: (ev: KeyboardEvent) => void;
    };
}
interface ActionHandlerOptionsExtra extends ActionHandlerOptions {
    repeat?: number;
}

declare global {
    interface HASSDomEvents {
        action: ActionHandlerDetail;
    }
}

class ActionHandler extends HTMLElement implements ActionHandler {
    public holdTime = 500;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public ripple: any;

    protected timer?: number;

    protected held = false;

    private cancelled = false;

    private dblClickTimeout?: number;

    private repeatTimeout: NodeJS.Timeout | undefined;

    private isRepeating = false;

    constructor() {
        super();
        this.ripple = document.createElement('mwc-ripple');
    }

    public connectedCallback(): void {
        Object.assign(this.style, {
            position: 'absolute',
            width: isTouch ? '100px' : '50px',
            height: isTouch ? '100px' : '50px',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
            zIndex: '999',
        });

        this.appendChild(this.ripple);
        this.ripple.primary = true;

        ['touchcancel', 'mouseout', 'mouseup', 'touchmove', 'mousewheel', 'wheel', 'scroll'].forEach(ev => {
            document.addEventListener(
              ev,
              () => {
                  this.cancelled = true;
                  if (this.timer) {
                      this.stopAnimation();
                      clearTimeout(this.timer);
                      this.timer = undefined;
                      if (this.isRepeating && this.repeatTimeout) {
                          clearInterval(this.repeatTimeout);
                          this.isRepeating = false;
                      }
                  }
              },
              { passive: true },
            );
        });
    }

    public bind(element: ActionHandlerElement, options: ActionHandlerOptionsExtra): void {
        if (element.actionHandler && deepEqual(options, element.actionHandler.options)) {
            return;
        }

        if (element.actionHandler) {
            element.removeEventListener('touchstart', element.actionHandler.start!);
            element.removeEventListener('touchend', element.actionHandler.end!);
            element.removeEventListener('touchcancel', element.actionHandler.end!);

            element.removeEventListener('mousedown', element.actionHandler.start!);
            element.removeEventListener('click', element.actionHandler.end!);

            element.removeEventListener('keyup', element.actionHandler.handleEnter!);
        } else {
            element.addEventListener('contextmenu', (ev: Event) => {
                const e = ev || window.event;
                if (e.preventDefault) {
                    e.preventDefault();
                }
                if (e.stopPropagation) {
                    e.stopPropagation();
                }
                e.cancelBubble = true;
                e.returnValue = false;
                return false;
            });
        }
        element.actionHandler = { options };

        element.actionHandler.start = (ev: Event): void => {
            this.cancelled = false;
            let x;
            let y;
            if ((ev as TouchEvent).touches) {
                x = (ev as TouchEvent).touches[0].pageX;
                y = (ev as TouchEvent).touches[0].pageY;
            } else {
                x = (ev as MouseEvent).pageX;
                y = (ev as MouseEvent).pageY;
            }
            if (options.hasHold) {
                this.held = false;
                this.timer = window.setTimeout(() => {
                    this.startAnimation(x, y);
                    this.held = true;
                    console.log(options);
                    if (options.repeat && !this.isRepeating) {
                        this.isRepeating = true;
                        this.repeatTimeout = setInterval(() => {
                            fireEvent(element, 'action', { action: 'hold' });
                        }, options.repeat);
                    }
                }, this.holdTime);
            }
        };

        element.actionHandler.end = (ev: Event): void => {
            // Don't respond when moved or scrolled while touch
            if (['touchend', 'touchcancel'].includes(ev.type) && this.cancelled) {
                if (this.isRepeating && this.repeatTimeout) {
                    clearInterval(this.repeatTimeout);
                    this.isRepeating = false;
                }
                return;
            }
            const target = ev.target as HTMLElement;
            // Prevent mouse event if touch event
            if (ev.cancelable) {
                ev.preventDefault();
            }
            if (options.hasHold) {
                clearTimeout(this.timer);
                if (this.isRepeating && this.repeatTimeout) {
                    clearInterval(this.repeatTimeout);
                }
                this.isRepeating = false;
                this.stopAnimation();
                this.timer = undefined;
            }
            if (options.hasHold && this.held) {
                if (!options.repeat) {
                    fireEvent(target, 'action', { action: 'hold' });
                }
            } else if (options.hasDoubleClick) {
                if ((ev.type === 'click' && (ev as MouseEvent).detail < 2) || !this.dblClickTimeout) {
                    this.dblClickTimeout = window.setTimeout(() => {
                        this.dblClickTimeout = undefined;
                        fireEvent(target, 'action', { action: 'tap' });
                    }, 250);
                } else {
                    clearTimeout(this.dblClickTimeout);
                    this.dblClickTimeout = undefined;
                    fireEvent(target, 'action', { action: 'double_tap' });
                }
            } else {
                fireEvent(target, 'action', { action: 'tap' });
            }
        };

        element.actionHandler.handleEnter = (ev: KeyboardEvent): void => {
            if (ev.keyCode !== 13) {
                return;
            }
            (ev.currentTarget as ActionHandlerElement).actionHandler!.end!(ev);
        };

        element.addEventListener('touchstart', element.actionHandler.start, { passive: true });
        element.addEventListener('touchend', element.actionHandler.end);
        element.addEventListener('touchcancel', element.actionHandler.end);

        element.addEventListener('mousedown', element.actionHandler.start, { passive: true });
        element.addEventListener('click', element.actionHandler.end);

        element.addEventListener('keyup', element.actionHandler.handleEnter);
    }

    private startAnimation(x: number, y: number): void {
        Object.assign(this.style, {
            left: `${x}px`,
            top: `${y}px`,
            display: null,
        });
        this.ripple.disabled = false;
        this.ripple.active = true;
        this.ripple.unbounded = true;
    }

    private stopAnimation(): void {
        this.ripple.active = false;
        this.ripple.disabled = true;
        this.style.display = 'none';
    }
}

// TODO You need to replace all instances of "action-handler-harmony" with "action-handler-<your card name>"
customElements.define('action-handler-harmony', ActionHandler);

const getActionHandler = (): ActionHandler => {
    const body = document.body;
    if (body.querySelector('action-handler-harmony')) {
        return body.querySelector('action-handler-harmony') as ActionHandler;
    }

    const actionhandler = document.createElement('action-handler-harmony');
    body.appendChild(actionhandler);

    return actionhandler as ActionHandler;
};

export const actionHandlerBind = (element: ActionHandlerElement, options: ActionHandlerOptionsExtra): void => {
    const actionhandler: ActionHandler = getActionHandler();
    if (!actionhandler) {
        return;
    }
    actionhandler.bind(element, options);
};

export const actionHandler = directive((options: ActionHandlerOptionsExtra = {}) => (part: PropertyPart): void => {
    actionHandlerBind(part.committer.element as ActionHandlerElement, options);
});
