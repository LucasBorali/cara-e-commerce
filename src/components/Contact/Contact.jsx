import React from 'react';
import Banner from '../Home/Banner';
import banner from '../../Assets/about/banner.png';
import classes from './Contact.module.css';
import p1 from '../../Assets/people/1.png'
import p2 from '../../Assets/people/2.png'
import p3 from '../../Assets/people/3.png'


const Contact = () => {
  return (
    <section className={classes.contact}>
      <Banner banner={banner}>
        <h1>#let's_talk</h1>
        <p>LEAVE A MESSAGE, We love to hear from you!</p>
      </Banner>

      <div className={classes['form-container']}>
        <form>
          <p>LEAVE A MESSAGE</p>
          <h2>We love to hear from you</h2>
          <input type="text" name="name" id="name" placeholder="Your Name" />
          <input type="email" name="email" id="email" placeholder="E-mail" />
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject"
          />
          <input
            type="text"
            name="message"
            id="message"
            placeholder="Your Message"
            className={classes.message}
          />
          <button type="submit">Send</button>
        </form>
        <div className={classes['people-container']} >
          <div className={classes.people}>
            <img src={p1} alt="John Doe" srcset="" />
            <div>
            <h3>John Doe</h3>
            <p>Senior Marketing Manager</p>
            <p>Phone:</p>
            <p>E-mail: conracr@example.com</p>
            </div>
          </div>

          <div className={classes.people}>
            <img src={p2}  alt="William Smith" srcset="" />
            <div>
            <h3>William Smith</h3>
            <p>Senior Marketing Manager</p>
            <p>Phone:</p>
            <p>E-mail: conracr@example.com</p>
            </div>
          </div>

          <div className={classes.people}>
            <img src={p3}  alt="Emma Stone" srcset="" />
            <div>
            <h3>Emma Stone</h3>
            <p>Senior Marketing Manager</p>
            <p>Phone:</p>
            <p>E-mail: conracr@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
