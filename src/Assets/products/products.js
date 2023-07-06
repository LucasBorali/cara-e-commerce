import f1 from './f1.jpg';

import f2 from './f2.jpg';
import f2a from './f2-a.jpg';
import f2b from './f2-b.jpg';
import f2c from './f2-c.jpg';

import f3 from './f3.jpg';
import f3a from './f3-a.jpg';
import f3b from './f3-b.jpg';
import f3c from './f3-c.jpg';

import f4 from './f4.jpg';
import f4a from './f4-a.jpg';
import f4b from './f4-b.jpg';
import f4c from './f4-c.jpg';

import f5 from './f5.jpg';
import f5a from './f5-a.jpg';
import f5b from './f5-b.jpg';
import f5c from './f5-c.jpg';

import f6 from './f6.jpg';
import f6a from './f6-a.jpg';
import f6b from './f6-b.jpg';
import f6c from './f6-c.jpg';

import f7 from './f7.jpg';
import f7a from './f7-a.jpg';
import f7b from './f7-b.jpg';

import f8 from './f8.jpg';
import f8a from './f8-a.jpg';


class Products {
  constructor(img, name, price, brand) {
    this.img = img;
    this.name = name;
    this.price = price;
    this.brand = brand;
  }
}

export const summerItems = [
  new Products([f1], 'Hawaian Shirt', 18.99, 'Ambition'),
  new Products(
    [f2, f2a, f2b, f2c],
    'Hawaian Shirt - Summer Edition',
    30.99,
    'Ambition'
  ),
  new Products(
    [f3, f3a, f3b, f3c],
    'Hawaian Shirt - Summer Edition',
    30.99,
    'Ambition'
  ),
  new Products(
    [f4, f4a, f4b, f4c],
    'Hawaian Shirt - Summer Edition',
    30.99,
    'Ambition'
  ),
  new Products(
    [f5, f5a, f5b, f5c],
    'Hawaian Shirt - Summer Edition',
    30.99,
    'Ambition'
  ),
  new Products(
    [f6, f6a, f6b, f6c],
    'Hawaian Shirt - Summer Edition',
    30.99,
    'Ambition'
  ),
  new Products(
    [f7, f7a, f7b],
    'Hawaian Shirt - Summer Edition',
    30.99,
    'Ambition'
  ),
  new Products([f8, f8a], 'Hawaian Shirt - Summer Edition', 30.99, 'Ambition'),
];
