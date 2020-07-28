const initialState = {
  images: [],
  term: 'animal',
  loading: true,
  modal_index: 0,
  modal: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'IMAGES_LOADED': {
      return {
        ...state,
        loading: false,
        images: action.payload,
      };
    }
    case 'IMAGES_LOADING': {
      return {
        ...state,
        loading: true,
      };
    }
    case 'CHANGE_TERM': {
      return {
        ...state,
        term: action.payload,
      };
    }
    case 'CHANGE_LOADING': {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case 'CHANGE_MODAL_INDEX': {
      return {
        ...state,
        modal_index: action.payload,
      };
    }
    case 'CHANGE_MODAL': {
      return {
        ...state,
        modal: action.payload,
      };
    }

    default:
      return state;
  }
};

export default reducer;
