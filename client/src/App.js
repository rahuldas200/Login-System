import React from 'react';
import './App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';

// ** Import all components**
import Login from './components/Login';
import Otp from './components/Otp';
import Register from './components/Register';
import Profile from './components/Profile';
import Recovary from './components/Recovary';
import Reset from './components/Reset';
import PageNotFound from './components/PageNotFound';
import Home from './components/Home';


// ** Root Route**
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>
  },
  {
    path: '/login',
    element:<Login></Login>
  },
  {
    path:'/login/otp',
    element:<Otp></Otp>
  },
  {
    path: '/register',
    element: <Register/>
  },
  {
    path: '/profile',
    element: <Profile></Profile>
  },
  {
    path: '/recovary',
    element: <Recovary></Recovary>
  },
  {
    path: '/reset',
    element: <Reset></Reset>
  },
  {
    path: '*',
    element: <PageNotFound></PageNotFound>
  }
])

function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}

export default App;
