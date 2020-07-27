import React, { useState, useEffect } from 'react';
import ImageCard from './components/ImageCard';
import ImageSearch from './components/Search';
import Loader from './components/Loader';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [term, setTerm] = useState('animal');

  useEffect(() => {
    fetch(
      `http://pixabay.com/api/?key=17642443-cbd0b95c530bc11f4b4204d64&q=${term}&image_type=photo&pretty=true`,
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <div className="container mx-auto py-10 lg:px-10 px-4">
      <h1 className="text-center text-5xl md:text-6xl text-gray-700 mb-6">
        Gallery
      </h1>
      <ImageSearch
        searchText={(text) => {
          setLoading(true);
          setTerm(text);
        }}
      />

      {!isLoading && images.length === 0 && (
        <h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1>
      )}

      {isLoading ? (
        <Loader />
      ) : (
        <div className="gallery grid grid-cols-2 md:grid-cols-3 sm:gap-4 gap-3">
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
