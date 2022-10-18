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

let createPost = (post) => {
	setTimeout(() => {
		posts.push(post)
		//depending on the milisecond number on below line, the createPost function
		//----is being executed after getPosts function despite createPost()
		//----being called before getPosts()
	}, 2000)
}

createPost({ title: "Post three", body: "This is post three" })
getPosts()

// let createPost = (post, callback) => {
//     return new Promise((resolve,reject) => {
//         setTimeout(())
//     })
// 	setTimeout(() => {
// 		posts.push(post)
// 		callback()
// 	}, 2000)
// }

// createPost({ title: "Post Three", body: "this is post three" }, getPosts)
// 	.then(getPosts)
// 	.catch((err) => console.log(err))

// if (typeof window !== "undefined") {
// 	console.log("you are on the browser")
// } else {
// 	console.log("you are on the server")
// }
