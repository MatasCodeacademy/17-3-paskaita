const masyvas2 = [
	1, 1, 1, 1, 1, 8, 8, 8, 8, 9, 11, 10, 11, 12, 12, 12, 13, 131, 3,
];

const masyvas3 = [
	1, 1, 1, 1, 1, 8, 8, 8, 8, 9, 11, 10, 11, 12, 12, 12, 13, 131, 3,
];

const masyvas4 = [
	1, 1, 1, 1, 1, 8, 8, 8, 8, 9, 11, 10, 11, 12, 12, 12, 13, 131, 3,
];

const masyvas5 = [
	1, 1, 1, 1, 1, 8, 8, 8, 8, 9, 11, 10, 11, 12, 12, 12, 13, 131, 3,
];

let naujasMasyvas = [];
let naujasMasyvas3 = [];
let masyvas2Surusuotas = masyvas2.sort((item1, item2) => item1 - item2);

for (let i = 0; i < masyvas2Surusuotas.length; i++) {
	if (masyvas2Surusuotas[i] !== masyvas2Surusuotas[i - 1]) {
		naujasMasyvas.push(masyvas2Surusuotas[i]);
	}
}

let naujasMasyvas2 = masyvas2
	.sort((item1, item2) => item1 - item2)
	.filter((element, index, array) => element !== array[index - 1]);

console.log(naujasMasyvas);
console.log(naujasMasyvas2);

console.log("kazkas");
