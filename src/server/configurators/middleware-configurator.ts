import * as bodyParser from "body-parser";
import { Express } from "express";
import { LOG_LEVEL } from "../../core/config/config";
import { ServerConfigurator } from "./server-configurator";
import cors = require('cors');
import compression = require('compression');
import morgan = require('morgan');


export class MiddlewareConfigurator implements ServerConfigurator {
  configure(app: Express): void {
    app.use(morgan(LOG_LEVEL));
    app.use(cors());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());
    app.use(compression());
  }
}
