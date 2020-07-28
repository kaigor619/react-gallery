import React, { useState, useEffect } from 'react';
import Lightbox from 'react-image-lightbox';
import * as Action from '../../redux/actions';
import { connect } from 'react-redux';
import 'react-image-lightbox/style.css';

function ModalWindow({ modal, modal_index, images, closeWindow }) {
  let [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    setPhotoIndex(modal_index);
  }, [modal_index]);

  if (!modal || modal_index < 0 || !images[modal_index]) return null;

  return (
    <div>
      <Lightbox
        mainSrc={images[photoIndex].largeImageURL}
        nextSrc={images[(photoIndex + 1) % images.length].largeImageURL}
        prevSrc={
          images[(photoIndex + images.length - 1) % images.length].largeImageURL
        }
        onCloseRequest={() => closeWindow()}
        onMovePrevRequest={() =>
          setPhotoIndex((photoIndex + images.length - 1) % images.length)
        }
        onMoveNextRequest={() =>
          setPhotoIndex((photoIndex + 1) % images.length)
        }
      />
    </div>
  );
}

const mapStateToProps = ({ modal_index, images, modal }) => ({
  modal_index,
  images,
  modal,
});

const mapDispatchToProps = (dispatch) => {
  return {
    closeWindow: () => dispatch(Action.changeModal(false)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalWindow);
