import faker from 'faker';

const cartText = `<tr><td>You have ${faker.random.number()} items in your cart</td></tr>`

console.log(cartText);
document.querySelector('#items-table').innerHTML = cartText;