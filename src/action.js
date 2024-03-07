export const SAVE_CONTACT = "SAVE_CONTACT";
export const EDIT_CONTACT = "EDIT_CONTACT";
export const DELETE_CONTACT = "DELETE_CONTACT";

export const saveContact = (dispatch, newContact) => {
    dispatch({
        type: SAVE_CONTACT,
        payload: {contact: newContact}
    })
};
export const editContact = (dispatch,  contacts) => {
    dispatch({
        type: EDIT_CONTACT,
        payload: {contacts }
    });
};
export const deleteContact = (dispatch,  contacts) => {
    dispatch({
        type: DELETE_CONTACT,
        payload: {contacts }
    });
};