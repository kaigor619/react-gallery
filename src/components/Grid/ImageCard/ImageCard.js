import React from 'react';
import { connect } from 'react-redux';
import * as Action from '../../../redux/actions';
import './ImageCard.css';
import search_svg from './search.svg';

const ImageCard = ({ image, changeTerm, index, openModal }) => {
  return (
    <div className="image-card max-w-sm rounded overflow-hidden shadow-lg">
      <div className="preview" onClick={() => openModal(index)}>
        <img src={image.webformatURL} alt="" className="preview-image w-full" />
        <div className="preview_overlay">
          <div className="search_svg">
            <img src={search_svg} alt="" />
          </div>
        </div>
      </div>
      <div className="sm:px-5 px-3 py-2 sm:py-4 ">
        <div className="font-bold text-purple-500 sm:text-xl text-lg mb-2">
          Photo by {image.user}
        </div>
        <ul className="sm:text-base text-sm">
          <li>
            <strong>Views: </strong>
            {image.views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className="sm:px-5 px-3  py-2 sm:py-4">
        {image.tags.split(', ').map((tag, index) => (
          <span
            onClick={() => changeTerm(tag)}
            key={index}
            className="inline-block cursor-pointer bg-gray-200 hover:bg-gray-300 rounded-full px-3 py-1 sm:text-sm text-xs font-semibold text-gray-700 mr-2 mb-2 transition-colors duration-200"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeTerm: (term) => {
      dispatch(Action.changeTerm(term));
      dispatch(Action.fetchImages());
    },
    openModal: (i) => {
      dispatch(Action.changeModalIndex(i));
      dispatch(Action.changeModal(true));
    },
  };
};

export default connect(null, mapDispatchToProps)(ImageCard);
