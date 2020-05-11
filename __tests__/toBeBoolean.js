// boolean으로 비교되는지를 검증

test("number 0 is false but string 0 is true", () => {
  expect(0).toBeFalsy();
  expect("0").toBeTruthy();
});
