import axios from "axios";
import {
  GET_CONTACTS_LOAD,
  GET_CONTACTS_SUCCESS,
  GET_CONTACTS_FAIL,
  DELETE_CONTACT,
  GET_CONTACT


} from "../const/contact";

export const getContacts = () => async (dispatch) => {
  dispatch({ type: GET_CONTACTS_LOAD });
  try {
      let result = await axios.get("/api/contact");
      console.log(result)
      dispatch({ type: GET_CONTACTS_SUCCESS, payload: result.data.response });
  } catch (error) {
      dispatch({ type: GET_CONTACTS_FAIL, payload: error });
      console.log(error);
  }
};

export const deleteContact = (id) => (dispatch) => {
  axios
      .delete(`/api/contact/${id}`)
      .then((res) => dispatch(getContacts()))
      .catch((err) => console.log(err));
};

export const getContact = (id) => (dispatch) => {
  axios
      .get(`/contact/${id}`)
      .then((res) => dispatch({ type: GET_CONTACT, payload: res.data.response }))
      .catch((err) => console.log(err));
};





