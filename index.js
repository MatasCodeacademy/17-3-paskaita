const masyvas1 = [
	1, 1, 1, 1, 1, 8, 8, 8, 8, 9, 11, 10, 11, 12, 12, 12, 13, 131, 3,
];

let naujasMasyvas = [];

let masyvas1Surusuotas = masyvas1.sort((item1, item2) => item1 - item2);

for (let i = 0; i < masyvas1Surusuotas.length; i++) {
	if (masyvas1Surusuotas[i] !== masyvas1Surusuotas[i - 1]) {
		naujasMasyvas.push(masyvas1Surusuotas[i]);
	}
}

let naujasMasyvas2 = masyvas1
	.sort((item1, item2) => item1 - item2)
	.filter((element, index, array) => element !== array[index - 1]);

console.log(naujasMasyvas);
console.log(naujasMasyvas2);
