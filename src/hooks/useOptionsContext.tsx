import { OptionsContext } from "../components/ContextProvider";
import { TContextProps } from "../types/types";
import { useContext } from "react";


export const useOptionsContext = (): TContextProps => {
    const context = useContext(OptionsContext);
    if (!context) {
      throw new Error('useMyContext must be used within a MyProvider');
    }
    return context;
  };