import { SAVE_CONTACT, EDIT_CONTACT, DELETE_CONTACT } from "./action";


export const appReducer = (state, action) => {
  switch (action.type) {
    case SAVE_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload.contact],
      };

    case EDIT_CONTACT:
      return {
        ...state,
        contacts: action.payload.contacts,
      };
      case DELETE_CONTACT:
        return {
          ...state,
          contacts: action.payload.contacts,
        };
    default:
      return state;
  }
};
