import faker from 'faker';

let products = '';

for (let i = 0; i < 10; i++) {
	const name = faker.commerce.productName();
	const price = faker.commerce.price();

	products += `
		<tr>
			<td><b>${name}</b></td>
			<td>${price}</td>
		</tr>
	`;
}

console.log(products);
document.querySelector('#products-table').innerHTML = products;