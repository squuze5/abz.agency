import React from 'react';

import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';
import Users from './components/Users/Users';
import About from './components/About/About';
import Banner from './components/Banner/Banner';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
      <Users />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
