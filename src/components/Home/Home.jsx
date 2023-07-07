import React from 'react';
import heroImage from '../../Assets/hero4.png';
import buttonImage from '../../Assets/button.png';
import classes from './Home.module.css';
import { features } from '../../Assets/features/features';
import DisplayProducts from './DisplayProducts';
import b2 from '../../Assets/banner/b2.jpg';
import b17 from '../../Assets/banner/b17.jpg';
import b10 from '../../Assets/banner/b10.jpg';
import b7 from '../../Assets/banner/b7.jpg';
import b4 from '../../Assets/banner/b4.jpg';
import b18 from '../../Assets/banner/b18.jpg';
import Banner from './Banner';

const Home = ({ products }) => {

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
      <DisplayProducts
        description="Summer Collection New Modern Design"
        products={products[0]}
        title="Featured Products"
      />
      <Banner color="#dad7d7" alignItems="center" banner={b2}>
        <p
          style={{
            margin: '0',
          }}
        >
          Repair Services
        </p>
        <h2>
          Up to <span>70% Off</span> - All t-shirts & Accessories
        </h2>
        <button>Explore More</button>
      </Banner>
      <DisplayProducts
        description="Summer Collection New Modern Design"
        products={products[1]}
        title="New Arrivals"
      />
      <div className={classes['banner-container']}>
        <Banner
          color="#fff"
          alignItems="start"
          width="45vw"
          height="40vh"
          banner={b17}
        >
          <p
            style={{
              margin: '0',
            }}
          >
            Crazy Deals
          </p>
          <h2>Buy 1 Get 1 Free</h2>
          <p>The best classic dress is on sale at cara</p>
          <button
            style={{
              color: '#fff',
              backgroundColor: 'transparent',
              border: '2px solid #fff',
            }}
          >
            Learn More
          </button>
        </Banner>
        <Banner
          color="#fff"
          alignItems="start"
          width="45vw"
          height="40vh"
          banner={b10}
        >
          <p
            style={{
              margin: '0',
            }}
          >
            spring/summer
          </p>
          <h2>upcoming season</h2>
          <p>The best classic dress is on sale at cara</p>
          <button
            style={{
              backgroundColor: '#3D827A',
              color: '#fff',
            }}
          >
            Collection
          </button>
        </Banner>
        <Banner
          alignItems="start"
          color="#fff"
          width="28vw"
          height="40vh"
          banner={b7}
        >
          <h2>SEASON SALE</h2>
          <p>
            <span>Winter Collection - 50% Off</span>
          </p>
        </Banner>
        <Banner
          alignItems="start"
          color="#fff"
          width="28vw"
          height="40vh"
          banner={b4}
        >
          <h2>NEW FOOTWEAR COLLECTION</h2>
          <p>
            <span>Spring/Summer 2023</span>
          </p>
        </Banner>
        <Banner
          alignItems="start"
          color="#fff"
          width="28vw"
          height="40vh"
          banner={b18}
        >
          <h2>T-SHIRTS</h2>
          <p>
            <span>New Trendy Prints</span>
          </p>
        </Banner>
      </div>
    </section>
  );
};

export default Home;
