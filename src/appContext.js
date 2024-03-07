import { createContext, useContext, useReducer } from "react";
import { appReducer } from "./reducers";

const initialState = {
  contacts: [
    { name: "Anju", age: 29, city: "Essen" },
    { name: "Felix", age: 30, city: "Essen" },
  ],
};

const AppContext = createContext({});

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState);
    return (
      <AppContext.Provider value={{ ...state, dispatch }}>
        {children}
      </AppContext.Provider>
    );
  };
  
  export const useAppContext = () => {
    return useContext(AppContext);
  };
