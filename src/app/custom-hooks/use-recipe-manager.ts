import { useState } from 'react';
import { FoodRecipe } from '../models/recipe/recipe';
import fetchFoodRecipeByName from '../api-services/fetch-recipe';


const useRecipeFetcher = () => {


  const [recipe, setRecipe] = useState<FoodRecipe>();
  const [recipeloading, setRecipeLoading] = useState(false);
  const [recipeEror, setRecipeEror] = useState<string | null>(null);


  
  const handleFetchRecipe = async (recipeName: string) => {
    if(recipeName.length>0)
      {
    setRecipeLoading(true);
    setRecipeEror(null);
    try {
      const fetchedRecipe = await fetchFoodRecipeByName(recipeName);
         
      // console.log(fetchedRecipe);

      if (fetchedRecipe) {
        setRecipe(fetchedRecipe);
      } else {
        setRecipeEror('Recipe not found');
      }
    } catch (err) {
      setRecipeEror('Error fetching recipe');
    } finally {
      setRecipeLoading(false);
    }
  
  }
  else
  {
    setRecipeLoading(true);
  }
  };

  return {
    handleFetchRecipe, 
    recipeloading,
    setRecipeLoading,
    recipe,           
    recipeEror,             
  };
};

export default useRecipeFetcher;
