import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HeadLineCards from './components/HeadLineCards';
import Food from './components/Food';

const App = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <HeadLineCards />
            <Food />
        </div>
    );
};

export default App;
