import React from 'react';
 import './App.css';
 import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/Signup';
 
 
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import CartPage from './pages/CartPage';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>
    ,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>,
  },
  {
    path: "/cart",
    element: <CartPage></CartPage>,
  },
]);

function App() {
  return (
    <div className="Ap">
      <RouterProvider router={router} />
         </div>
  );
}

export default App;
