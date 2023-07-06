
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import {summerItems} from './Assets/products/products'

function App() {
  console.log(summerItems)
  return (
    <div className="App">
      <Navbar />
      <Home products={summerItems}/>
      
    </div>
  );
}

export default App;
