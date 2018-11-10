import { Express, Request, Response } from "express";
import { ServerConfigurator } from "./server-configurator";
import logger from "../../core/logs/logger";
import { UsersBl } from "../../core/bl/users/users-bl";

export class RouteConfigurator implements ServerConfigurator {
  configure(app: Express): void {
    app.get("/", (req: Request, res: Response) => {
      logger.info("Got request for default route");
      res.send("hello world!");
    });

    app.get("/users", (req: Request, res: Response) => {
      res.send(UsersBl.getUsers());
    });
  }
}
