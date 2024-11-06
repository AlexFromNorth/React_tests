const mapArrToString = require("./mapArrToString");

// .toEqual - value check to the reply for not-primitive types(object)
// .not - negative result

describe("mapArrToString", () => {
  test("Корректное значение(массив чисел)", () => {
    expect(mapArrToString([ 1, 2, 3, 4, 5, 6 ])).toEqual(['1', '2', '3', '4', '5', '6']);
  });
  test("Корректное значение(различные типы данных)", () => {
    expect(mapArrToString([ 1, 2, 3, null, undefined, "qwfadf", 7])).toEqual(['1', '2', '3', '7']);
  });
  test("Корректное значение(пустой массив)", () => {
    expect(mapArrToString([])).toEqual([]);
  });
  test("Корректное значение(отрицания массива)", () => {
    expect(mapArrToString([ 1, 2, 3 ])).not.toEqual([ 1, 2, 3 ]);
  });
});
