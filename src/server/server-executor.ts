import logger from "../core/logs/logger";
import { createServer } from "http";
import { PORT } from "../core/config/config";
import { configurators } from "./configurators";
import { ServerConfigurator } from "./configurators/server-configurator";
import express from 'express';
import * as os from "os";

export class ServerExecutor {
  private app: any;
  private server: any;

  run(): void {
    this.init();
    this.configure();
    this.listen();
  }

  init(): void {
    this.app = express();
    this.server = createServer(this.app);
  }

  configure(): void {
    configurators.forEach((configurator: ServerConfigurator) => configurator.configure(this.app));
  }

  listen(): void {
    return this.server.listen(+PORT, () => {
      logger.info(`Server is running on [${os.hostname()}]:[${PORT}]`);
    });
  }
}
