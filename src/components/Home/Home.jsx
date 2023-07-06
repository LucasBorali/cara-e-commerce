import React from 'react';
import heroImage from '../../Assets/hero4.png';
import buttonImage from '../../Assets/button.png';
import classes from './Home.module.css';
import { features } from '../../Assets/features/features';
import DisplayProducts from './DisplayProducts';

const Home = ({products}) => {
  return (
    <section className={classes.home}>
      <header className={classes.head}>
        <img src={heroImage} alt="hero-cover" />
        <div className={classes.hero}>
          <p
            style={{
              fontSize: '1.3rem',
            }}
          >
            Trade-in-offer
          </p>
          <p
            style={{
              fontSize: '1.6rem',
            }}
          >
            Super value deals
          </p>
          <p
            style={{
              fontSize: '3rem',
              color: '#3D827A',
            }}
          >
            On all products
          </p>
          <p
            style={{
              color: '#959AB2',
              fontSize: '1.2rem',
              width: '50vw',
              maxWidth: '300px',
            }}
          >
            Save more with coupons 8 up to 70% off
          </p>
          <button>
            <img style={{}} src={buttonImage} alt="" srcset="" />
            <span
              style={{
                position: 'absolute',
              }}
            >
              Shop Now
            </span>
          </button>
        </div>
      </header>
      <div className={classes.features}>
        <div>
          <img src={features[0]} alt="Free shipping" srcset="" />
          <p
            style={{
              backgroundColor: '#DBF4F6',
              color: '#89D8E1',
            }}
          >
            Free Shipping
          </p>
        </div>
        <div>
          <img src={features[1]} alt="Free shipping" srcset="" />
          <p
            style={{
              backgroundColor: '#F8E7F1',
              color: '#CB7CA7',
            }}
          >
            Online Order
          </p>
        </div>
        <div>
          <img src={features[2]} alt="Free shipping" srcset="" />
          <p
            style={{
              backgroundColor: '#EAF5D8',
              color: '#B8DD7F',
            }}
          >
            Save Money
          </p>
        </div>
        <div>
          <img src={features[3]} alt="Free shipping" srcset="" />
          <p
            style={{
              backgroundColor: '#DBF4F6',
              color: '#89D8E1',
            }}
          >
            Promotions
          </p>
        </div>
        <div>
          <img src={features[4]} alt="Free shipping" srcset="" />
          <p
            style={{
              backgroundColor: '#E3DDF4',
              color: '#A28FDA',
            }}
          >
            Happy Sell
          </p>
        </div>
        <div>
          <img src={features[5]} alt="Free shipping" srcset="" />
          <p
            style={{
              backgroundColor: '#F6E5DB',
              color: '#E1A789',
            }}
          >
            24/7 Support
          </p>
        </div>
      </div>
    <DisplayProducts description='Summer Collection New Modern Design' products={products} title='Featured Products'/>
      
    </section>
  );
};

export default Home;
