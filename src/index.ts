import "dotenv/config";
import { listenToEvent, triggerEvent } from "./lib/events";
import { Events } from "./types";
import { healthCheck } from "./events/healthCheck";

listenToEvent(Events.HEALTH_CHECK, healthCheck);

triggerEvent(Events.HEALTH_CHECK);
