// 객체를 비교

test("유저 정보", () => {
  expect(getUser(1)).toEqual({ uid: 1, username: "user1" });
  expect(getUser(2)).toEqual({ uid: 2, username: "user2" });
  expect(getUser(3)).toEqual({ uid: 3, username: "user3" });
  expect(getUser(4)).toEqual(null);
});

const userList = [
  { uid: 1, username: "user1" },
  { uid: 2, username: "user2" },
  { uid: 3, username: "user3" },
];

function getUser(uid) {
  const user = userList.find((user) => user.uid === uid);
  if (user) return user;
  return null;
}
