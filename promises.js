let posts = [
	{ title: "Post one", body: "This is post one" },
	{ title: "Post two", body: "This is post two" },
]
let doc1 = document.getElementById("main")
//cycles through posts array, each indy post will be added to the output string,
//----output string added to the html, all after 1000ms
let getPosts = () => {
	setTimeout(() => {
		let output = ""
		posts.forEach((post, index) => {
			output += `<li>${post.title}</li>`
		})
		doc1.innerHTML = output
	}, 1000)
}

//removing the cb, both second argument form createPost()
//----and the calling of cb
//----promise functions call resolve when runs succsuesful,
//----call reject when something goes wrong
//----generally some sort of error checking will occur after reject, not in this example
//----promises allow us to use the '.then()' syntax
let createPost = (post) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			posts.push(post)
			let error = true
			if (!error) {
				resolve()
			} else {
				reject("Error: Something went wrong")
			}
		}, 2000)
	})
}

//promise.all is used to avoid having to do .then multiple times
//----if
let promise1 = Promise.resolve("Hello World")
let promise2 = 10
let promise3 = new Promise((resolve, reject) =>
	setTimeout(resolve, 2000, "Goodbye")
)
//fetch gets data from a website and return as an object
//----if you don't use the '.then((res) => res.json()', you will get a bunch
//----we use json because the server provided 'valid json', could use 'res.otherstuff' etc, but probs always use res.json
let promise4 = fetch("https://jsonplaceholder.typicode.com/posts").then(
	(res) => {
		return res.json()
	}
)

Promise.all([promise1, promise2, promise3, promise4]).then((values) =>
	console.log(values)
)

//above we changed 'error = false' to 'error = true'
//----then we added .catch which prevents an 'uncaught error'
//----with .catch implemented it produces
//----
// createPost({ title: "Post three", body: "This is post three" })
// 	.then(getPosts)
// 	.catch((err) => console.log(err))
