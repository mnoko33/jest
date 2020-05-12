const axios = require('axios')

// 비동기 test
test("fetch user", (done) => {
    fetchUser(1, (user) => {
        expect(user).toEqual({
            id: 1,
            name: "User1"
        })
        done() // done 함수가 콜백 함수 호출을 확인하도록 한다
    })
})

// test 함수가 Promise를 리턴하면 jest Runner는 해당 promise의 resolve를 기다린다
test("fetch User2", () => {
    return fetchUser2(1).then(user => {
        expect(user).toEqual({
            id: 1,
            name: "User1"
        })
    })
})

// async await 사용하기
test("fetch User2", async () => {
    const user = await fetchUser2(1);
    expect(user).toEqual({
        id: 1,
        name: "User1"
    })
})

// 실제 api를 사용해보자
test("api", async () => {
    console.log('test start')
    const post = await getPost(1);
    console.log('post : ', post)
    expect(post).toEqual({
        userId : 1,
        id : 1,
        title : "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body : "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    })
})


// asynchronus
function fetchUser(id, callback) {
    setTimeout(() => {
        console.log('wait 0.1 sec ...')
        const user = {
            id,
            name: `User${id}`,
        }
        callback(user)
    }, 100)
}

function fetchUser2(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("wait 0.1 sec...");
            const user = {
                id,
                name: "User" + id
            }
            resolve(user)
        }, 100)
    })
}

async function getPost(id) {
    return await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
}