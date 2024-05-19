import "../src/index.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "../src/components/NavBar"
import Auth from "../src/pages/Auth"
import Shop from "../src/pages/Shop"
import TypeBar from "./components/TypeBar";
import ProductList from "./components/ProductList";
import Admin from "./pages/Admin";
import {useContext, useEffect, useState} from 'react';
import {Context} from "./index";
import React from "react";
import {Spinner} from "react-bootstrap";
import Footer from "./components/Footer";
import {check} from "./http/userAPI";

function App() {

  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
      check().then(data => {
          user.setUser(true)
          user.setIsAuth(true)
      }).finally(() => setLoading(false))
  }, [])

  if (loading) {
      return <Spinner animation={"grow"}/>
  }

  return (
    <BrowserRouter>
      <NavBar />
  
      <Shop />
      <AppRouter />
      <Auth />
      <Footer />
    </BrowserRouter>
  );
}



export default App;