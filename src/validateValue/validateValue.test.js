const validateValue = require("./validateValue");

// test - jest function for test
// expect - method the call function from project
// .toBe - value check to the reply for primitive types (not only boolean)

test("Валидация значения", () => {
  expect(validateValue(50)).toBe(true);
});

// describe - wrapper for the tests

describe("validateValue", () => {
  test("Корректное значение(средние число)", () => {
    expect(validateValue(50)).toBe(true);
  });
  test("Корректное значение(наименьшее число)", () => {
    expect(validateValue(0)).toBe(true);
  });
  test("Корректное значение(наибольшее число)", () => {
    expect(validateValue(100)).toBe(true);
  });
  test("Некорректное значение(меньше)", () => {
    expect(validateValue(-1)).toBe(false);
  });
  test("Некорректное значение(больше)", () => {
    expect(validateValue(101)).toBe(false);
  });
});
