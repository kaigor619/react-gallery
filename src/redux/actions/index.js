export const imagesLoading = () => {
  return {
    type: 'IMAGES_LOADING',
  };
};
export const imagesLoaded = (images) => {
  return {
    type: 'IMAGES_LOADED',
    payload: images,
  };
};
export const changeTerm = (term) => {
  return {
    type: 'CHANGE_TERM',
    payload: term,
  };
};
export const changeLoading = (loading) => {
  return {
    type: 'CHANGE_LOADING',
    payload: loading,
  };
};
export const changeModalIndex = (index) => {
  return {
    type: 'CHANGE_MODAL_INDEX',
    payload: index,
  };
};
export const changeModal = (bool) => {
  return {
    type: 'CHANGE_MODAL',
    payload: bool,
  };
};

export const fetchImages = () => (dispatch, getState) => {
  let { term, loading } = getState();

  if (!loading) dispatch(imagesLoading(true));
  fetch(
    `https://pixabay.com/api/?key=17642443-cbd0b95c530bc11f4b4204d64&q=${term}&image_type=photo&pretty=true`,
  )
    .then((res) => res.json())
    .then((data) => {
      dispatch(imagesLoaded(data.hits));
      console.log(data.hits);
    })
    .catch((err) => console.log(err));
};
