export enum Events {
  HEALTH_CHECK = "health-check",
}

export type EventHandlers = {
  [Events.HEALTH_CHECK]: () => void;
}