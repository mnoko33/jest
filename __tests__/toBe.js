// 기본형 값(숫자 또는 문자)을 비교

test("더하기", () => {
  expect(plus(1, 3)).toBe(4);
  expect(plus(4, 3)).toBe(7);
  expect(plus(100, 0)).toBe(100);
  expect(plus(-10, 3)).toBe(-7);
});

test("빼기", () => {
  expect(minus(1, 3)).toBe(-2);
  expect(minus(10, 3)).toBe(7);
  expect(minus(100, 100)).toBe(0);
  expect(minus(30, -10)).toBe(40);
});

test("곱하기", () => {
  expect(multiply(1, 3)).toBe(3);
  expect(multiply(1, 0)).toBe(0);
  expect(multiply(10, -3)).toBe(-30);
  expect(multiply(0, 30)).toBe(0);
});

test("나누기", () => {
  expect(divide(0, 3)).toBe(0);
  expect(divide(10, 5)).toBe(2);
  expect(divide(10, 0)).toBe(NaN);
  expect(divide(10, 4)).toBe(2.5);
});

function plus(a, b) {
  return a + b;
}

function minus(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return NaN;
  } else {
    return a / b;
  }
}
