import {mount} from 'products/ProductsIndex'; //--> remoteName/remoteResource
import 'items/ItemsIndex';
import { mountCart as mc } from 'cart/CartIndex';
console.log('Container!');

mount(document.querySelector('#products-table'));
mc(document.querySelector('#cart-table'));