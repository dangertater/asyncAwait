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
			let error = false
			if (!error) {
				resolve()
			} else {
				reject("Error: Something went wrong")
			}
		}, 2000)
	})
}

createPost({ title: "Post three", body: "This is post three" }).then(getPosts)
