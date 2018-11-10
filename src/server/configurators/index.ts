import { MiddlewareConfigurator } from "./middleware-configurator";
import { RouteConfigurator } from "./route-configurator";
import { ServerConfigurator } from "./server-configurator";

export const configurators: ServerConfigurator[] = [
  new MiddlewareConfigurator(),
  new RouteConfigurator(),
];
