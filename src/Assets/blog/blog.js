import b1 from './b1.jpg';
import b2 from './b2.jpg';
import b3 from './b3.jpg';
import b4 from './b4.jpg';
import b5 from './b5.jpg';
import b6 from './b6.jpg';
import b7 from './b7.jpg';

class BlogPost {
  constructor(postIMG, date, title, postContent, postLink) {
    this.postIMG = postIMG;
    this.date = date;
    this.title = title;
    this.postContent = postContent;
    this.postLink = postLink;
  }
}

export const blog = [
  new BlogPost(
    b1,
    '13/07',
    'The Cotton-Jersey Zip-Up Hoodie',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nemo adipisci modi dolorem quis voluptatem, exercitationem porro voluptas, nesciunt excepturi unde sunt, nulla magnam. Ratione nisi qui consequuntur! Voluptatibus, nostrum.',
    '#'
  ),
  new BlogPost(
    b2,
    '13/06',
    'How to Style a Quiff',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nemo adipisci modi dolorem quis voluptatem, exercitationem porro voluptas, nesciunt excepturi unde sunt, nulla magnam. Ratione nisi qui consequuntur! Voluptatibus, nostrum.',
    '#'
  ),
  new BlogPost(
    b3,
    '12/05',
    'Must Have Skater Girls Items',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nemo adipisci modi dolorem quis voluptatem, exercitationem porro voluptas, nesciunt excepturi unde sunt, nulla magnam. Ratione nisi qui consequuntur! Voluptatibus, nostrum.',
    '#'
  ),
  new BlogPost(
    b4,
    '16/04',
    'Runway-Inspired Trends',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nemo adipisci modi dolorem quis voluptatem, exercitationem porro voluptas, nesciunt excepturi unde sunt, nulla magnam. Ratione nisi qui consequuntur! Voluptatibus, nostrum.',
    '#'
  ),
  new BlogPost(
    b5,
    '10/03',
    'AW20 Menswear Trends',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nemo adipisci modi dolorem quis voluptatem, exercitationem porro voluptas, nesciunt excepturi unde sunt, nulla magnam. Ratione nisi qui consequuntur! Voluptatibus, nostrum.',
    '#'
  ),
  new BlogPost(
    b6,
    '13/02',
    'The Cotton-Jersey Zip-Up Hoodie',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nemo adipisci modi dolorem quis voluptatem, exercitationem porro voluptas, nesciunt excepturi unde sunt, nulla magnam. Ratione nisi qui consequuntur! Voluptatibus, nostrum.',
    '#'
  ),
  new BlogPost(
    b7,
    '13/01',
    'The Cotton-Jersey Zip-Up Hoodie',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nemo adipisci modi dolorem quis voluptatem, exercitationem porro voluptas, nesciunt excepturi unde sunt, nulla magnam. Ratione nisi qui consequuntur! Voluptatibus, nostrum.',
    '#'
  ),
  new BlogPost(
    b1,
    '13/01',
    'The Cotton-Jersey Zip-Up Hoodie',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nemo adipisci modi dolorem quis voluptatem, exercitationem porro voluptas, nesciunt excepturi unde sunt, nulla magnam. Ratione nisi qui consequuntur! Voluptatibus, nostrum.',
    '#'
  ),
];
