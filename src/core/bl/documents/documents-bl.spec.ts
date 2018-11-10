import {DocumentsBl} from "./documents-bl";
import {DB} from "../db/db";
import Mock = jest.Mock;

/**
 * Example with dependency injection and instantiation
 */

describe('documents', () => {
    let documentInstane: DocumentsBl;

    test('should return true', () => {
        const runResult:boolean = false;

        const dbMock: Mock<DB> = jest.fn<DB>(() => ({
            run: jest.fn(() => runResult),
        }));

        const dbMockInstance: DB = new dbMock();
        documentInstane = new DocumentsBl(dbMockInstance);

        expect(documentInstane.exist()).toEqual(runResult);
    });
});
