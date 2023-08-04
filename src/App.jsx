import Shop from './components/Shop/Shop';
import Blog from './components/Blog/Blog';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './Pages/RootLayout';
import HomePage from './Pages/HomePage';
import DisplayPage from './Pages/displayPage';
import LogInPage from './Pages/LogInPage';
import RegisterPage from './Pages/RegisterPage';

const router = createBrowserRouter([
  {
    path: '/cara-e-commerce',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: ':productName', element: <DisplayPage /> },
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
  {
    path: '/log-in',
    element: <LogInPage />
  },
  {
    path: '/sign-in',
    element: <RegisterPage />
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
