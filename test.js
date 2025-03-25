let СArray = [-9, -6, -3, 0, 3, 6, 9, 12, 11, 5, 0, 10, 2];

let result = 1;
let countEqualTtree = 0;

for (let i = 0; i < СArray.length; i++) {
	if (СArray[i] < 0) {
		result = result * СArray[i];
	}
	if (СArray[i] % 3 === 0) {
		countEqualTtree = countEqualTtree + 1;
	}
}

// console.log(result, countEqualTtree);

let zeroCount = 0;
let countEqualTwo = 0;
let maxEqualTwo = 0;

let max = -9;

for (let i = 0; i < СArray.length; i++) {
	if (СArray[i] === 0) {
		zeroCount = zeroCount + 1;
	}

	if (СArray[i] % 2 !== 0) {
		countEqualTwo = countEqualTwo + СArray[i];
	}

	if (СArray[i] % 2 === 0 && СArray[i] > max) {
		max = СArray[i];
	}
}

// console.log(zeroCount, countEqualTwo, max);

let newArray = [2, 4, 6, 7, 9, -2, 10];

for (let i = 0; i < newArray.length; i++) {
	if (i % 2 !== 0) {
		newArray[i] = 0;
	}
}

// console.log(newArray);

let newArray2 = [2, 4, 6, 7, 9, -2, 10];

let oddIndexElements = [];
for (let i = 1; i < newArray2.length; i += 2) {
	oddIndexElements.push(newArray2[i]);
}

for (let i = 0; i < oddIndexElements.length - 1; i++) {
	for (let j = 0; j < oddIndexElements.length - i - 1; j++) {
		if (oddIndexElements[j] > oddIndexElements[j + 1]) {
			let temp = oddIndexElements[j];
			oddIndexElements[j] = oddIndexElements[j + 1];
			oddIndexElements[j + 1] = temp;
		}
	}
}

let oddIndexCounter = 0;
for (let i = 1; i < newArray2.length; i += 2) {
	newArray2[i] = oddIndexElements[oddIndexCounter++];
}

// console.log(newArray2);

let newArray3 = [2, 4, 6, 7, 9, -2, 10, 12];

for (let i = 1; i < newArray3.length; i++) {
	if (newArray3[i] % 3 === 0) {
		for (let j = i; j < newArray3.length - 1; j++) {
			newArray3[j] = newArray3[j + 1];
		}
		newArray3.length--;
		i--;
	}
}

// console.log(newArray3);

let newArray4 = [2, 4, 6, 7, 9, -2, 10, 12];

let maxIndex = 0;
for (let i = 1; i < newArray4.length; i++) {
	if (newArray4[i] > newArray4[maxIndex]) {
		maxIndex = i;
	}
}

// Матрицы

let mass = [
	[1, 2, 3],
	[-4, 5, 6],
	[7, -8, 9],
];

let result2 = 0;

const findEl = () => {
	mass.forEach((item) => {
		item.forEach((el, index) => {
			if (el < 0) {
				result2 = result2 + 1;
			}
		});
	});
};
findEl();

// console.log(result2);

const findEl2 = () => {
	mass.forEach((item) => {
		let sum = 0;
		item.forEach((el, index) => {
			if (el > 0) {
				sum = sum + item[index];
			}
		});
		console.log(sum);
	});
};
findEl2();

// Минимальные значения

let minResults = new Array();

let resultIndex = 0;

mass.forEach((row, rowIndex) => {
	if (rowIndex % 2 !== 0) {
		let minOdd = null;

		row.forEach((num) => {
			if (num % 2 !== 0) {
				if (minOdd === null || num < minOdd) {
					minOdd = num;
				}
			}
		});

		if (minOdd !== null) {
			minResults[resultIndex] = minOdd;
			resultIndex++;
		}
	}
});

// console.log(minResults);

let product = 1;

mass.forEach((row, rowIndex) => {
	if (rowIndex < Math.ceil(mass.length / 2)) {
		row.forEach((element, colIndex) => {
			if (colIndex >= Math.ceil(row.length / 2)) {
				product *= element;
			}
		});
	}
});

// console.log(product);

const test = (N) => {
	let matrix = new Array(N);

	for (let i = 0; i < N; i++) {
		matrix[i] = new Array(N);

		for (let j = 0; j < N; j++) {
			if (i + j == N - 1) {
				// побочная диагональ
				matrix[i][j] = 2;
			}
			if (i == j) {
				// главная диагональ
				matrix[i][j] = 0;
			}

			if (i < j && i + j < N - 1) {
				matrix[i][j] = 1;
			}
			if (i > j && i + j < N - 1) {
				matrix[i][j] = 0;
			}
			if (i > j && i + j > N - 1) {
				matrix[i][j] = 0;
			}
			if (i < j && i + j > N - 1) {
				matrix[i][j] = 3;
			}
		}
	}

	return matrix;
};

// console.log(test(6));
