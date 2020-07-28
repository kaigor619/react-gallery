import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ImageCard from './ImageCard/index';
import Loader from './Loader';

import * as Action from '../../redux/actions';

const Grid = ({ loading, images, fetchImages }) => {
  useEffect(() => {
    console.log('didmount');
    fetchImages();
  }, []);

  return (
    <div className="gallery">
      {!loading && images.length === 0 && (
        <h1 className="text-3xl sm:text-5xl text-center mx-auto mt-32">
          No Images Found
        </h1>
      )}

      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 sm:gap-4 gap-3">
          {images.map((image, i) => (
            <ImageCard key={image.id} index={i} image={image} />
          ))}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = ({ images, loading }) => ({
  images,
  loading,
});
const mapDispatchToProps = {
  fetchImages: Action.fetchImages,
};

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
