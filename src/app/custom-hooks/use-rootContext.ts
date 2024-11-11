import { useContext } from "react";
import { RootContext } from "../context/root-context";

function useRootContext() {
 
    const context = useContext(RootContext);
    if (!context) {
      throw new Error('useItemManagerContext must be used within an ItemManagerProvider');
    }
    return context;
  }
  
  export { useRootContext };