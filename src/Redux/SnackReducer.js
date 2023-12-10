import {ActionTypes} from "./ActionType";

const initialState = {
  open: false,
  message: "",
  type: "success",
};
export default function SnackReducer (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SET_SNACKBAR:
      return { ...action.payload };
    
    default:
      return state;
      
  }
};