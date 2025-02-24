// import './App.css';
// import Register from './components/Register';
// import Login from './components/Login';
// import Home from './components/Home';
// import MainPage from './components/MainPage';
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import { useState } from 'react';

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const setAuth = (boolean) => {
//     setIsAuthenticated(boolean)
//   }

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<MainPage />} />
//         <Route path="/login" element={!isAuthenticated ? <Login setAuth={setIsAuthenticated} /> : <Navigate to="/dashboard" />} />
//         <Route path="/register" element={!isAuthenticated ? <Register setAuth={setIsAuthenticated} /> : <Navigate to="/login" />} />
//         <Route path="/dashboard" element={isAuthenticated ? <Home setAuth={setIsAuthenticated} /> : <Navigate to="/login" />} />
//         {/* {!isAuthenticated ? <Register setAuth={setIsAuthenticated} /> : <Navigate to="/login" />} */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;




import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import MainPage from './components/MainPage';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const renderLogin = (props) => {
    return !isAuthenticated ? <Login {...props} setAuth={setIsAuthenticated} /> : <Navigate to="/dashboard" />;
  };

  const renderRegister = (props) => {
    return !isAuthenticated ? <Register {...props} setAuth={setIsAuthenticated} /> : <Navigate to="/dashboard" />;
  };

  const renderDashboard = (props) => {
    return isAuthenticated ? <Home {...props} setAuth={setIsAuthenticated} /> : <Navigate to="/login" />;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={renderLogin()} />
        <Route path="/register" element={renderRegister()} />
        <Route path="/dashboard" element={renderDashboard()} />
      </Routes>
    </Router>
  );
}

export default App;