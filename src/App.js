import "../src/index.css";
import NavBar from "../src/components/NavBar"
import { useContext, useEffect, useState} from 'react';
import {Context} from "./index";
import React from "react";
import {Spinner} from "react-bootstrap";
import Footer from "./components/Footer";
import {check} from "./http/userAPI";
import About from "./components/About"
import Company from "./components/Company"

function App() {

  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    check()
      .then(userData => {
        user.setUser(userData)
        user.setIsAuth(true)
      })
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
      return <Spinner animation={"grow"}/>
  }

  return (
    <>
      <NavBar />
      <div className="w-[960px] m-auto flex flex-col justify-center items-center">
      <Company />
      <About />
      </div>
      <Footer />
   
    </>
  );
}



export default App;