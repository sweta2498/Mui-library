import { ActionTypes } from "./ActionType";

export const setSnackbar = (payload) => 
    (dispatch) => 
    {
        dispatch({ 
            type:ActionTypes.SET_SNACKBAR , 
            payload 
    });
};