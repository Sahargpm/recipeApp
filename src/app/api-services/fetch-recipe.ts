import { FoodRecipe } from '@/app/models/recipe/recipe'; // Import the FoodRecipe class
import Instructions from '../models/instructions/instruction';
import Tags from '../models/tag/tag';
import { Ingredient } from '../models/ingredient/ingredient';

const endpoint = 'https://upbeat-surprise-c14a529e81.strapiapp.com/graphql';

const query = `
query ($name: String!, $limit: Int, $start: Int ,$ingredientLimit: Int){
    recipes(filters: {
      RecipeName: {
        eq: $name
      }

    }
    , pagination: { limit: $limit, start: $start }) {
      RecipeName
      Tags {
        price
        pax
        prepTime
        cookTime
        cuisineType
        difficulty
      }
    
    recipeSteps {
            number,
            steps
          }
      
    Ingredient (pagination: { limit: $ingredientLimit }) {
            name,
            imageUrl {
              url
            },
            isRequired
          }
    }
}
`;

const fetchFoodRecipeByName = async (recipeName: string, limit = 300, start = 0, ingredientLimit=300): Promise<FoodRecipe | null> => {
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: { name: recipeName, limit, start ,ingredientLimit}, 
      }),
    });

    const json = await response.json();
    console.log("data",json)
    if (json.errors) {
      console.error('GraphQL Errors:', json.errors);
      return null;
    }

    const itemsData = json.data.recipes;
 

    if (itemsData.length === 0) {
      console.log('No recipe found.');
      return null;
    }
    // console.log("data")
    // console.log(json);

    const recipeData= itemsData[0];

    //  console.log(recipeData);

            
    const ingredients: Ingredient[] = recipeData.Ingredient.map((item: any) => {
        return new Ingredient(
         
           item.name, 
           item.imageUrl?.url || '', 
           item.isRequired 
        
          );
      });

    
    const instructions: Instructions[] = recipeData.recipeSteps.map((item: any) =>{

             return    new Instructions(
                       item.steps,
                       item.number,
                
             );

    });

         const tag:Tags=new Tags( 
                   recipeData.Tags.price,
                   recipeData.Tags.pax,
                   recipeData.Tags.cookTime,
                   recipeData.Tags.cuisineType,
                   recipeData.Tags.difficulty,
         );

       const recipe = new FoodRecipe(
       recipeData.RecipeName,
       ingredients,
       instructions,
       tag,   
     
      );

    console.log("Ingre",recipe)
    return recipe; 

  } catch (error) {
    console.error('Error fetching recipe:', error);
    return null;
  }
};


export default fetchFoodRecipeByName;
