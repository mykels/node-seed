import { Express } from "express";

export interface ServerConfigurator {
  configure(app: Express): void;
}
