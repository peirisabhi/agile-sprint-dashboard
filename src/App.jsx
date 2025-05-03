import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import Login from './pages/Login/Login.jsx';
import Velocity from './pages/Velocity/Velocity.jsx';
import './App.css';
import './assets/styles/variables.css';
import { AuthProvider } from "./auth/AuthContext.jsx";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";
import Sprints from "./pages/Sprints/Sprints.jsx";
import Employees from "./pages/Employees/Employees.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import Backlog from "./pages/Backlog/Backlog.jsx";
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
        // <Router>
        //     <div className="app">
        //         {/*<Login/>*/}
        //         {/*<Dashboard/>*/}

        //         <Velocity />
        //         <Sprints /> 
        //     </div>
        // </Router>

        <Router>
            <div className="app">
                <Routes>
                    <Route path="/sprints" element={<Sprints />} />
                    <Route path="/employees" element={<Employees />} />
                    <Route path="/projects/*" element={<Projects />} />
                    <Route path="/backlogs/*" element={<Backlog />} />
                    <Route path="*" element={<Velocity />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;