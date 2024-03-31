
import './App.css';
import Header from './components/Header';
import React from 'react';
import Banner from './components/banner/Banner';
import Upcomingevents from './components/upcomingevents/Upcomingevents';
function App() {
  return (
    <React.Fragment>
      <Header />
      <Banner  />
      <Upcomingevents />
    </React.Fragment>
  );
}

export default App;
