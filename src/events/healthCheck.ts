import { EventHandlers, Events } from "../types";

export const healthCheck: EventHandlers[Events.HEALTH_CHECK] = () => {
  console.log("Health check event triggered");
};
