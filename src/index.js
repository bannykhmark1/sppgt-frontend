import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from "./store/UserStore";
import ProductStore from "./store/ProductStore";

export const Context = createContext(null)

let root = document.getElementById('root');

ReactDOM.createRoot(root).render(
    <Context.Provider value={{
        user: new UserStore(),
        product: new ProductStore(),
    }}>
        <App />
    </Context.Provider>
);