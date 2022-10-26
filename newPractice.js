let addNumbers = (num1, num2) => {
	return new Promise((resolve, reject) => {
		let sum = num1 + num2
		if (sum === 5) {
			resolve()
		} else {
			reject()
		}
	})
}

let afterNumbersAdded = () => {
	console.log("afterNumbersAdded", "your shit got resolved")
}

let rejeceted = () => {
	console.log("rejected", "your shit got rejected")
}

//q4e how do I debug promise.all if it does not go into the indiividual promises?

// let promise1 = Promise.resolve("promise1")
// let promise2 = 10
// let promise3 = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		let error = true
// 		if (error === false) {
// 			resolve()
// 		} else {
// 			reject()
// 		}
// 	}, 2000)
// })
// let promiseArray = [promise1, promise2, promise3]

// Promise.all(promiseArray).then(addNumbers(2, 3)).then(afterNumbersAdded)

//--------asnyn await below----------

let itWorked = () => {
	console.log("itWorked")
}

let threeSecondDelay = async () => {
	setTimeout(() => {
		console.log("threeSecondDelayInsideDelay")
	}, 3000)
	console.log("threeSecondDelayOutsideDelay")
}

let newFunc = async () => {
	await threeSecondDelay()
	itWorked()
}

async function init() {
	await threeSecondDelay()
	itWorked()
}

// threeSecondDelay()

//q4e why is the timeout not initiated?
newFunc()
// init()
