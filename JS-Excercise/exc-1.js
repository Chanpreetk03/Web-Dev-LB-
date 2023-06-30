//question 1
function sum(a, b) {
	return a + b
}

sum(5, -2)

//question 2
function strLen(input) {
	return input.length()
}

strLen('hi, hello bye')

//question 3
function mathify(a, b) {
	console.log(`The two numbers are: ${a} and ${b}
    there sum is${a + b}
    there difference is${abs(a - b)}
    there product is${a + b}
    there quotient is${a / b}`)
}

mathify(10, 2)

//question 4
function larger(a, b) {
	if (a > b) return a
	else return b
}

larger(5, 6)

//question 5
function revStr(input) {
	var splitStr = input.split('')
	var rever = splitStr.reverse()
	return rever.join('')
}

revStr('hello')

//question 6
function check(num) {
	if (num > 0) return 'positive'
	else if (num < 0) return 'negative'
	else return 'zero'
}

check(7)

//question 7
function multiplyTable(num) {
	for (let i = 1; i <= 10; i++) {
		console.log(`${num} * ${i} = ${num * i}`)
	}
}

multiplyTable(7)

//question 8
function numSum(num) {
	return (n * (n + 1)) / 2
}

numSum(10)

//question 9
function vowelCount(input) {
	input.toLowerCase()
	let ans = 0
	for (let i = 0; i < input.length; i++) {
		if (
			input[i] == 'a' ||
			input[i] == 'e' ||
			input[i] == 'i' ||
			input[i] == 'o' ||
			input[i] == 'u'
		) {
			ans += 1
		}
	}
	return ans
}

vowelCount(shfhskieliknkoaplo)

//question 10
function findCommonElements(arr1, arr2) {
	// Create an empty array to hold the common elements
	let commonElements = []

	// Loop through each element in arr1
	for (let i = 0; i < arr1.length; i++) {
		// Check if the current element is in arr2
		if (arr2.includes(arr1[i])) {
			// If the element is in arr2 and not already in commonElements array, add it
			if (!commonElements.includes(arr1[i])) {
				commonElements.push(arr1[i])
			}
		}
	}

	// Sort the commonElements array in ascending order
	commonElements.sort((a, b) => a - b)

	// Return the commonElements array
	return commonElements
}

// Example usage
const arr1 = [1, 2, 3, 4, 5]
const arr2 = [3, 4, 5, 6, 7]
const commonElements = findCommonElements(arr1, arr2)
console.log(commonElements) // Outputs: [3, 4, 5]
