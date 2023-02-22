// import { createContext, useReducer } from "react";

// const initialState = {
//   projects: null,
// };

// export const projectReducer = (state, action) => {
//   switch (action.payload) {
//     case "GET_PROJECTS":
//       return {
//         projects: action.payload,
//       };
//     case "CREATE_PROJECT":
//       return {
//         projects: [...state.projects, action.payload],
//       };
//     default:
//       return state;
//   }
// };

// export const ProjectContext = createContext();

// export const ProjectContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(projectReducer, initialState);

//   return (
//     <ProjectContext.Provider value={{ ...state, dispatch }}>
//       {children}
//     </ProjectContext.Provider>
//   );
// };

import { createContext, useReducer } from "react";

const initialState = {
  projects: [],
};

export const projectReducer = (state, action) => {
  switch (action.type) {
    case "SET_PROJECTS":
      return {
        ...state,
        projects: action.payload,
      };

    case "CREATE_PROJECT":
      return {
        ...state,
        projects: [action.payload, ...state.projects],
      };

    default:
      return state;
  }
};

export const ProjectContext = createContext();

export const ProjectContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(projectReducer, initialState);

  return (
    <ProjectContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ProjectContext.Provider>
  );
};
