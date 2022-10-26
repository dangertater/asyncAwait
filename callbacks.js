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

//we removed the call on getPosts(), and instead are plugging it into the second
//----argument for createPost(x,y). we use callback immediately after posts.push(post)
//----executes in order to prevent 'post 3' being created after 'getPosts()' is called
let createPost = (post, cb) => {
	setTimeout(() => {
		posts.push(post)
		cb()
	}, 2000)
}

createPost({ title: "Post three", body: "This is post three" }, getPosts)

let createPost2 = (post, callback) => {
    return new Promise((resolve,reject) => {
	setTimeout(() => {
		posts.push(post)
		callback()
	}, 2000)
}

// createPost({ title: "Post Three", body: "this is post three" }, getPosts)
// 	.then(getPosts)
// 	.catch((err) => console.log(err))

//pre fixing with callback
// let createPost = (post) => {
// 	setTimeout(() => {
// 		posts.push(post)
// 		//depending on the milisecond number on below line, the createPost function
// 		//----is being executed after getPosts function despite createPost()
// 		//----being called before getPosts()
// 	}, 2000)
// }
//asdf