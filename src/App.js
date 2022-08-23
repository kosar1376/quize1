import React from 'react';
import Header from './components/Header';
import CoinList from './sections/CoinList';
import ConvertBox from './sections/ConvertBox';
import Footer from './sections/Footer';
import Banner from './sections/Banner.js';



const App = () => {
  return (
    <div >
      <Header/>
      <main>
        <Banner/>
      <CoinList/>
      <ConvertBox/>
      <Footer/>
      </main>
    </div>
  );
};

export default App;
