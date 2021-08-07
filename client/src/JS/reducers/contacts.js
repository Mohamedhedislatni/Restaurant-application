import {
  GET_CONTACTS_FAIL,
  GET_CONTACTS_SUCCESS,
  GET_CONTACTS_LOAD,
  GET_CONTACT,

} from "../const/contact";

const initialState = {
  contacts: [],
  loadContacts: false,
  errors: null,
  contact: {},

};

export const contactReducer = (state = initialState, { type, payload }) => {
  switch (type) {
      case GET_CONTACTS_LOAD:
          return { ...state, loadContacts: true };
      case GET_CONTACTS_SUCCESS:
          return { ...state, contacts: payload, loadContacts: false };
      case GET_CONTACTS_FAIL:
          return { ...state, loadContacts: false, errors: payload };

      case GET_CONTACT:
          return { ...state, contact: payload };
     

      default: return state;

  }
}