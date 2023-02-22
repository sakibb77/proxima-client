import { useContext } from "react";
import { ProjectContext } from "../context/ProjectContext";

export const useProjectContext = () => {
  const context = useContext(ProjectContext);

  if (!context) {
    throw new Error(
      "you must call useProjectContext insite ProjectContextProvider"
    );
  }

  return context;
};
