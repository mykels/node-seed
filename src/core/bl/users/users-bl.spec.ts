import {UsersBl} from "./users-bl";
import {Calculator} from "../calculator/calculator";

/**
 *  Example with static classes and spies
 */

describe('users', () => {
    test('should return users on GetUsers', () => {
        expect(UsersBl.getUsers()).toEqual(["micha", "yifat"]);
    });

    test('show call add', () => {
        const fakeAdd: jasmine.Spy = spyOn(Calculator, 'add');
        UsersBl.getUsers();
        expect(fakeAdd).toHaveBeenCalledTimes(1);
    });

    test('show return empty array on wrong calculation', () => {
        Calculator.add = jest.fn().mockImplementation(() => {
            return 4;
        });

        expect(UsersBl.getUsers()).toEqual([]);
    });
});
