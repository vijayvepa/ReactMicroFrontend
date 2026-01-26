import faker from 'faker';

const mount = el => {
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
	el.innerHTML = products;
}

console.log('env' + process.env.NODE_ENV)
if (process.env.NODE_ENV === 'development') {
	const el = document.querySelector('#products-table');
	if (el) {
		mount(el);
	}
}

export { mount };

