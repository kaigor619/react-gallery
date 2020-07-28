import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as Action from '../redux/actions';

const ImageSearch = ({ changeTerm, term }) => {
  let [text, setText] = useState(term);

  const onSubmit = (e) => {
    e.preventDefault();
    changeTerm(text);
  };

  useEffect(() => {
    setText(term);
  }, [term]);

  return (
    <div className="flex justify-center py-6 mb-6">
      <form className="search flex w-full md:w-2/4" onSubmit={onSubmit}>
        <input
          className="block flex-1 border border-gray-400 rounded-l-lg py-2 px-3"
          type="text"
          id="search"
          name="search"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button
          type="submit"
          className="px-4 bg-blue-500 text-white rounded-r-lg"
        >
          Search
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = ({ term }) => ({
  term,
});
const mapDispatchToProps = (dispatch) => {
  return {
    changeTerm: (term) => {
      dispatch(Action.changeTerm(term));
      dispatch(Action.fetchImages());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageSearch);
