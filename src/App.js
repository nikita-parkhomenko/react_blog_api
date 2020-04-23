import React from 'react';
import { Route } from 'react-router-dom';

import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import About from './components/about/about';
import Contact from './components/contact/contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </div>
  );
}

export default App;
