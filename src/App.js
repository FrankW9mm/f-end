import React from 'react';
import './App.css';
import Navigate from './components/Navigate';
import Hero from './pages/Hero';
import Features from './pages/Features';
import { FeatureData } from './data/FeaturesData';
import ColorPage from './pages/ColorPage';

function App() {
  return (
    <div className=''>
      <Navigate />
      <Hero />
      <Features data={FeatureData} />
      <ColorPage />
    </div>
  );
}

export default App;
