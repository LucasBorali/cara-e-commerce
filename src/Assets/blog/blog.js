import b1 from './b1.jpg'
import b2 from './b2.jpg'
import b3 from './b3.jpg'
import b4 from './b4.jpg'
import b5 from './b5.jpg'
import b6 from './b6.jpg'
import b7 from './b7.jpg'



class BlogPost {
  constructor(postIMG, date, title, postContent) {
    this.postIMG = postIMG;
    this.date = date;
    this.title = title;
    this.postContent = postContent;
  }
}


const blog = [
    new BlogPost() 
]