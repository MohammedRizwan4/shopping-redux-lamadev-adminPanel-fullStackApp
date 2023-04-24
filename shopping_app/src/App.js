import './App.css';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import {
    BrowserRouter as Router, Routes, Route, redirect, Navigate
} from 'react-router-dom';
import Sucess from './pages/Sucess';
import { StripeProvider } from '@stripe/react-stripe-js';
import { useSelector } from 'react-redux';

function App() {

    const user = useSelector(state => state.user.currentUser);
    console.log(user);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/products/:category" element={<ProductList />} />
                <Route path="/product/:productId" element={<Product />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={user ? <Navigate to="/" replace /> : <Login />} />
                <Route path="/register" element={user ? <Navigate to="/" replace /> : <Register />} />
                <Route path="/sucess" element={<Sucess />} />
            </Routes>
        </Router>

    );
}

export default App;
