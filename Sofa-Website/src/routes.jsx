// routes.js
import Home from './Pages/Home';
import ShoppingCart from './Pages/ShoppingCart';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Profile from './Pages/Profile';
import ShoppingCartInfo from './Pages/ShoppingCartInfo';
import ProductDetails from './Pages/ProductDetails';


const routes = [
  { path: "/", element: <Home /> },
  { path: "/shoppingCart", element: <ShoppingCart /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/profile", element: <Profile /> },
  { path: "/shoppingCartInfo", element: <ShoppingCartInfo /> },
  { path: "/product/:id", element: <ProductDetails /> }

];

export default routes;
