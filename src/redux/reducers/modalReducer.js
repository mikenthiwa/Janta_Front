import {LOAD_MODAL, HIDE_MODAL} from "../constants";

const initialState = {
  modalType: null
};

export default(state=initialState, action) => {
  switch (action.type) {
    case LOAD_MODAL:
      return { ...initialState, modalType: action.payload};
    case HIDE_MODAL:
      return {...initialState, modalType: null};
    default:
      return state
  }
};

