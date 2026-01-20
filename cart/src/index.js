import faker from 'faker';

const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`

console.log(cartText);
document.querySelector('#cart-div').innerHTML = cartText;