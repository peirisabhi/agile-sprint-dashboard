import React from 'react';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import Login from './pages/Login/Login.jsx';
import Velocity from './pages/Velocity/Velocity.jsx';
import './App.css';
import './assets/styles/variables.css';
import {AuthProvider} from "./auth/AuthContext.jsx";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";

// import './assets/styles/animations.css';

function App() {
    return (
        // <AuthProvider>
        //   <Router>
        //     <Routes>
        //       <Route path="/login" element={<LoginPage />} />
        //       <Route
        //         path="/dashboard"
        //         element={
        //           <PrivateRoute>
        //             <Dashboard />
        //           </PrivateRoute>
        //         }
        //       />
        //       <Route path="/" element={<Navigate to="/dashboard" replace />} />
        //     </Routes>
        //   </Router>
        // </AuthProvider>
        <Router>
            <div className="app">
                {/*<Login/>*/}
                {/*<Dashboard/>*/}
                <Velocity/>
            </div>
        </Router>
    );
}

export default App;