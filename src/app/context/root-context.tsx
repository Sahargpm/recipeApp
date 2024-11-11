import { createContext, useContext, useState, ReactNode } from 'react';
import { Dispatch, SetStateAction } from 'react';
import { ItemManager } from '../models/Item/item-manager';
import useItemManager from '../custom-hooks/use-item-manager';
import useRecipeManager from '../custom-hooks/use-recipe-manager';
import { FoodRecipe } from '../models/recipe/recipe';
import useRecipeFetcher from '../custom-hooks/use-recipe-manager';


interface RootContextProps {

  itemManager: ItemManager | null;
  recipe?:FoodRecipe;
  handelItemClik:(itemId:string)=>void;
  drawer?: boolean;
  handleSearch?:(itemTitle:string)=>void;
  setDrawer?: Dispatch<SetStateAction<boolean>>;
  loading?:boolean,
  recipeloading?:boolean,
  error?:string,

}
export const RootContext = createContext<RootContextProps|undefined>(undefined);



 interface rootContextProviderProps  {

  children: ReactNode;

}

const RootContextProvider=({ children }: rootContextProviderProps)=>{

  const { handleFetchRecipe,recipeloading,recipe,}=useRecipeFetcher();
  
  const { itemManager,loading, error,handleSearch,handelItemClik} = useItemManager(handleFetchRecipe);

  const [drawer,setDrawer]=useState<boolean>(false);

  return (

    <RootContext.Provider value={{drawer,setDrawer,itemManager,recipeloading,loading,error,recipe,handleSearch,handelItemClik}}>
      {children}
    </RootContext.Provider>
  );
}


export default RootContextProvider;
