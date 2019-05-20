import { LOAD_MODAL, HIDE_MODAL } from "../constants";

export const loadModal = (modalType) => {
  return {
    type: LOAD_MODAL,
    payload: modalType
  }
};


export const hideModal = () => {
  return {
    type: HIDE_MODAL
  }
};




