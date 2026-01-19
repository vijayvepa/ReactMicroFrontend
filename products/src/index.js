import faker from 'faker';

let products = '';

<<<<<<< HEAD
for (let i = 0; i < 3; i++) {
=======
for (let i = 0; i < 10; i++) {
>>>>>>> 853ae2b25ab7366e3049f50586db127f2c055f35
	const name = faker.commerce.productName();
	const price = faker.commerce.price();

	products += `
		<tr>
			<td>${name}</td>
			<td>${price}</td>
		</tr>
	`;
}

console.log(products);

