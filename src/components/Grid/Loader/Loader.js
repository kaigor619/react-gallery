import React from 'react';
import ImageLoader from './loader.gif';

const Loader = () => {
  return (
    <div className="loader flex justify-center py-16">
      <img className="w-24" src={ImageLoader} alt="" />
    </div>
  );
};

export default Loader;
