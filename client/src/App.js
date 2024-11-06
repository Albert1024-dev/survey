import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./components/pages/dashboard";
import Landering from "./components/pages/landering";
import Home from "./components/pages/home";
import AuthPage from './components/pages/authentication/auth';

import SurveyComponent from './components/pages/home/sub/front';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/contact" exact Component={Dashboard} />
              <Route path="/about" exact Component={Landering} />
              <Route path="/" exact Component={Home} />
              <Route path="/survey" exact Component={SurveyComponent} />
              <Route path="/auth" exact Component={AuthPage} />
          </Routes>
          <ToastContainer />
      </Router>
  );
}

export default App;
