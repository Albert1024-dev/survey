import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import Authenticatoin from './components/pages/authentication';
import Survey from './components/pages/survey';
import Resource from './components/pages/resource';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact Component={Authenticatoin} />
        <Route path="/survey" exact Component={Survey} />
        <Route path="/resource" exact Component={Resource} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
