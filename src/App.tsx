import React from 'react';
import './App.css';
import Banner from './components/banner/banner.component';
import BreadCrumb from './components/bread-crumb/bread-crumb.component';
import Blog from './components/blog/blog.component';
import Footer from './components/footer/footer.component';

function App() {
  return (
    <div className="App">
      <BreadCrumb />
      <Banner />
      <Blog />
      
      <Footer />
    </div>
  );
}

export default App;
