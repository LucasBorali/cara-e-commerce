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
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { userActions } from './store/user-slice';
import { auth } from './firebaseConfig';

const router = createBrowserRouter(
  [
    {
      path: '/',
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
      element: <LogInPage />,
    },
    {
      path: '/sign-in',
      element: <RegisterPage />,
    },
  ],
  { basename: '/cara-e-commerce' }
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const authUnsubscribe = auth.onAuthStateChanged(user => {
      if (user !== null) {
        dispatch(userActions.setUser());
      }

      authUnsubscribe();
    });
  }, [dispatch]);

  return <RouterProvider router={router} />;
}

export default App;
