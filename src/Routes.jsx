import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from './pages/home';

const Router = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route exact path="/home" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
