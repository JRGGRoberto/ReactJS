import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import Header from './components/Header';
import Routes from './routes';
import Footer from './components/Footer';

const App = () => (
  <div className="App">
      <Header />
      <Routes />
      <Footer />
  </div>
);

export default App;
