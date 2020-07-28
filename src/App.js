import React from 'react';
import ImageSearch from './components/Search';
import Grid from './components/Grid/Grid';
import ModalWindow from './components/Grid/ModalWindow';

function App() {
  return (
    <div className="container mx-auto py-10 lg:px-10 px-4">
      <h1 className="text-center text-5xl md:text-6xl text-gray-700 mb-6">
        Gallery
      </h1>
      <ImageSearch />
      <Grid />
      <ModalWindow />
    </div>
  );
}

export default App;
