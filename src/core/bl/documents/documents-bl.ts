import {DB} from "../db/db";

export class DocumentsBl {
    constructor(private db: DB) {

    }

    exist(): boolean {
        return this.db.run();
    }
}
