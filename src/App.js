import React from 'react';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';
import Users from './components/Users/Users';
import About from './components/About/About';
import Banner from './components/Banner/Banner';

function App() {
  return (
    <div className="App">
      <Banner />
      <About />
      <Users />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
