import React from 'react';
import './App.css';
import Banner from './components/banner/banner.component';
import BreadCrumb from './components/bread-crumb/bread-crumb.component';
import Blog from './components/blog/blog.component';
import Footer from './components/footer/footer.component';
import Navbar from './components/navbar/navbar.component';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BreadCrumb />
      <Banner />
      <Blog />

      <Footer />
    </div>
  );
}

export default App;
