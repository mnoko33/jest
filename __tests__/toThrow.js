test("throw error when id is negative", () => {
    expect(() => getUser(-1).toThrow())
    expect(() => getUser(-1).toThrow("Invalid ID"))
})


function getUser(id) {
    if (id <= 0) throw new Error("Invalid ID");
    return {
        id, email: "srs99125@naver.com"
    }
}