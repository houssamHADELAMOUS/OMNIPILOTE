import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './Layouts/Login';
import EditCategory from './components/Dashboard/Categories/EditCategory';
import PrivateRoute from './components/PrivateRoutes/PrivateRoutes';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route 
                    path="/dashboard" 
                    element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    } 
                />
                <Route 
                    path="/editcategories" 
                    element={
                        <PrivateRoute>
                            <EditCategory />
                        </PrivateRoute>
                    } 
                />
                <Route path="*" element={<div>404 Not Found</div>} /> {/* Fallback for undefined routes */}
            </Routes>
        </Router>
    );
};

export default App;
