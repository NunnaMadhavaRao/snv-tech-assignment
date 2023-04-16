import React from 'react';
import './App.css';
import Banner from './components/banner/banner.component';
import BreadCrumb from './components/bread-crumb/bread-crumb.component';

function App() {
  return (
    <div className="App">
      <BreadCrumb />
      <Banner />
    </div>
  );
}

export default App;
