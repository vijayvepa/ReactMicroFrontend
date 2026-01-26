import {mount} from 'products/ProductsIndex'; //--> remoteName/remoteResource
import 'items/ItemsIndex';
import 'cart/CartIndex';
console.log('Container!');

mount(document.querySelector('#products-table'));