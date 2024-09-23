// App.js
import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './routes';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';

const App = () => {
  const element = useRoutes(routes);

  return (
  
    <AuthProvider>
      <CartProvider>
        {element}
      </CartProvider>
    </AuthProvider>
  
  );
};

export default App;
