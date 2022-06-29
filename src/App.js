import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";

import Web3 from "web3";
import "./App.css";
import Doctor from "./pages/Doctor";
import Home from "./pages/Home";
import Patient from "./pages/Patient";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "react-toastify/dist/ReactToastify.css";

import { useState, useEffect } from "react";
import { useRedirect } from "./hooks/useRedirect";
import { NavBar } from "./components/NavBar";
function App() {
  const [redirect, setRedirect] = useRedirect();
  const [user, setUser] = useState();
  const web3 = new Web3(Web3.givenProvider);
  useEffect(() => {
    const checkUser = async () => {
      const accounts = await web3.eth.getAccounts();
      // console.log(accounts[0]);
      setUser(accounts[0]);
    };
    checkUser();
  });
  // console.log(`redirect : ${redirect}`);
  function updateRedirect() {
    setRedirect(false);
  }
  return (
    <div className="MainDiv">
      <ToastContainer />
      <NavBar user={user} />
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<Home user={user} updateRedirect={updateRedirect} />}
          />
          <Route
            exact
            path="/doctor"
            element={<Doctor user={user} redirect={redirect} />}
          />
          <Route
            path="/patient"
            element={<Patient user={user} redirect={redirect} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
