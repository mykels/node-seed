import { Calculator } from "./calculator";

describe('calculator', () => {
  test('should return addition on add', () => {
    expect(Calculator.add(2, 3)).toEqual(5);
  });

  test('should fail', () => {
    expect(true).toBeFalsy();
  });
});
