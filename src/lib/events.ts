import EventEmitter from "events";
import { EventHandlers, Events } from "../types";

const emitter = new EventEmitter();

export const listenToEvent = (
  event: Events,
  listener: EventHandlers[Events]
) => {
  emitter.on(event, listener);
};

export const triggerEvent = (event: Events, ...args: any[]) => {
  emitter.emit(event, ...args);
};
