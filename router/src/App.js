import React from 'react';
import AboutThisSite from './AboutThisSite';
import ContactUs from './ContactUs';
import LoginPage from './LoginPage';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='about' component = {<AboutThisSite />} />
          <Route path='/contact' component = {<ContactUs />} />
          <Route path='login' component = {<LoginPage />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
