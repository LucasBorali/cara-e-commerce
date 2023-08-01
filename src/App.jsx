import Shop from './components/Shop/Shop';
import Blog from './components/Blog/Blog';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './Pages/RootLayout';
import HomePage from './Pages/HomePage';
import ProductWindow from './components/Home/ProductWindow';
import DisplayPage from './Pages/displayPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'shop',
        element: <Shop />,
        
      },
      { path: 'shop/:productName', element: <DisplayPage /> },
      { path: 'blog', element: <Blog /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
