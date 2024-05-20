import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import UserStore from './store/UserStore';
import ProductStore from './store/ProductStore';
import { router } from './routes';
import './index.css'; // если есть

export const Context = createContext(null);

let root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <Context.Provider value={{
    user: new UserStore(),
    product: new ProductStore(),
  }}>
    <React.StrictMode>
      <RouterProvider router={router} /> {/* Router управляет рендерингом */}
    </React.StrictMode>
  </Context.Provider>
);