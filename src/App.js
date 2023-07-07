
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import {summerItems, newArrivals} from './Assets/products/products'
import Banner from './components/Home/Banner';
import b14 from './Assets/banner/b14.png'

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Home products={[summerItems, newArrivals]}/>
      <div className='news-letter'>
        <img src={b14} alt="subscribe" />
        <div>
        <h2>Sign Up For Newsletters</h2>
        <p>Get E-mail updates about our latest shop and <span>special offers.</span></p>
        </div>
        <div className='subscribe'>
          <input type='email' />
          <button>Sign Up</button>
        </div>
      </div>
      <footer>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </footer>
      
    </div>
  );
}

export default App;
