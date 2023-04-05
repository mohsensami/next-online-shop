import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Home from './pages/Home';
import Product from './pages/Product';

const App = () => {
    return (
        <div>
            <Header />
            <main className="py-3">
                <Container>
                    <Router>
                        <Routes>
                            <Route path="/" element={<Home />} exact />
                            <Route path="/product/:id" element={<Product />} />
                        </Routes>
                    </Router>
                </Container>
            </main>
            <Footer />
        </div>
    );
};

export default App;
