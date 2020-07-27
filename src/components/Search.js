import React, { useState } from 'react';

const ImageSearch = ({ searchText }) => {
  let text = '';

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <div className="flex justify-center py-6 mb-6">
      <form className="search flex w-full md:w-2/4" onSubmit={onSubmit}>
        <input
          className="block flex-1 border border-gray-400 rounded-l-lg py-2 px-3"
          type="text"
          id="search"
          name="search"
          onInput={(e) => {
            text = e.target.value;
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

export default ImageSearch;
