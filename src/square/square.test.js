const square = require("./square");

// toBeLessThan - number is less (num < x)
// toBeGreaterThan - number is greater (num > x)
// .toBeUndefined - element equal to undefined
// .toBeCalledTimes - number of method calls
// .clearAllMocks - clearing moks (number of calls)

describe("square", () => {
  let mockValue;

  // called before each(каждым) starting test
  beforeEach(() => {
    // add to db
  });

  // called once before starting
  beforeAll(() => {});

  test("Корректное значение", () => {
    expect(square(2)).toBe(4);
    expect(square(2)).toBeLessThan(5);
    expect(square(2)).toBeGreaterThan(3);
    expect(square(2)).not.toBeUndefined();
  });
  test("Мокаем функцию", () => {
    const spyMathPow = jest.spyOn(Math, `pow`);
    square(2);
    expect(spyMathPow).toBeCalledTimes(1);
  });
  test("Мокаем функцию", () => {
    const spyMathPow = jest.spyOn(Math, `pow`);
    square(1);
    expect(spyMathPow).toBeCalledTimes(0);
  });

  // called after each(каждым) starting test
  afterEach(() => {
    // delete from db
    jest.clearAllMocks()
  });

  // called once after starting
  afterAll(() => {});
});
