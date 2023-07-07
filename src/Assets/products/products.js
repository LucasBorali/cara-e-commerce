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

import n1 from './n1.jpg';
import n1a from './n1-a.jpg';
import n1b from './n1-b.jpg';
import n1c from './n1-c.jpg';

import n2 from './n2.jpg';
import n3 from './n3.jpg';
import n4 from './n4.jpg';
import n5 from './n5.jpg';
import n6 from './n6.jpg';
import n7 from './n7.jpg';
import n8 from './n8.jpg';

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
  new Products([f3, f3a, f3b, f3c], 'White Shirt', 10.99, 'Ambition'),
  new Products(
    [f4, f4a, f4b, f4c],
    'Cherry Blossoms Floral Shirt',
    15.99,
    'Ambition'
  ),
  new Products([f5, f5a, f5b, f5c], 'New Floral Shirt', 20.99, 'Ambition'),
  new Products([f6, f6a, f6b, f6c], 'Chemise En Velours', 30.99, 'Éphémère'),
  new Products(
    [f7, f7a, f7b],
    'Striped Print Button Culottes',
    25.99,
    'Ambition'
  ),
  new Products([f8, f8a], 'Casual - New Design', 40.99, 'Ambition'),
];

export const newArrivals = [
  new Products([n1, n1a, n1b, n1c], 'Casual - New Design', 40.99, 'Ambition'),
  new Products([n2], 'Stripe Comfort', 50.99, 'Ambition'),
  new Products([n3], "Spring Escape Men's Apparel", 80.99, 'Ambition'),
  new Products([n4], 'Resort Shirt', 45.99, 'Ambition'),
  new Products([n5], 'Fashion Biz Indie Long Sleeve Shirt', 65.99, 'Ambition'),
  new Products([n6], 'Short Casual', 15.99, 'Ambition'),
  new Products([n7], ' Howard Shirt army', 40.99, 'Ambition'),
  new Products([n8], 'Chitose arbe Stand Collar Shirt', 40.99, 'Ambition'),
];
