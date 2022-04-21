import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './components/routes/home_page/HomePage'
import Register from './components/routes/register_page/RegisterPage'
import MenuPage from './components/routes/menu_page/MenuPage'

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} >
                <Route path='/' element={<HomePage />} />
                <Route path='Register' element={<Register />} />
                <Route path='Menu' element={<MenuPage />} />
            </Route>
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);
