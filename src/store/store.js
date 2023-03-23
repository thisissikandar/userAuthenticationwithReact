import { createContext, useReducer } from "react";

export const MovieContext = createContext(null);
export const MovieDispatchContext = createContext(null);

const initialMovie = [];

export const MovieProvider = ({ children }) => {
  const [state, disptach] = useReducer(movieReducer, initialMovie);
  return (
    <MovieContext.Provider value={state}>
      <MovieDispatchContext.Provider value={disptach}>
        {children}
      </MovieDispatchContext.Provider>
    </MovieContext.Provider>
  );
};

function movieReducer(state, action) {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "addmovie": {
      return [...state, {}];
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
