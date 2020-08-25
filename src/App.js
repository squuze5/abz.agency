import React from 'react';
import Footer from './components/Footer/Footer';
import Form from './components/Form/Form';
import Users from './components/Users/Users';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <About />
      <Users />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
