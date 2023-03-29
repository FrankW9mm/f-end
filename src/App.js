import React from 'react';
import './App.css';
import Navigate from './components/Navigate';
import Hero from './pages/Hero';
import Features from './pages/Features';
import { FeatureData } from './data/FeaturesData';
import ColorPage from './pages/ColorPage';
import ColorPicker from './pages/ColorPicker'
import ImageDummy from './pages/ImageDummy';
import TextDummy from './pages/TextDummy';
import NoteDummy from './pages/NoteDummy';

function App() {
  return (
    <div className=''>
      <Navigate />
      <Hero />
      <Features data={FeatureData} />
      {/* <ColorPage /> */}
      <ColorPicker />
      <ImageDummy />
      <TextDummy />
      <NoteDummy />
    </div>
  );
}

export default App;
