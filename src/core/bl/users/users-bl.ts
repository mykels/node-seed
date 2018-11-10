import { Calculator } from "../calculator/calculator";

export class UsersBl {
  static getUsers(): string[] {
    if (Calculator.add(2, 3) === 5) {
      return ["Fredy", "Mercury"];
    }

    return [];
  }
}
