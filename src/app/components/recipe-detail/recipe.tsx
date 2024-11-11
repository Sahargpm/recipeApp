import BaseContainer from "@/app/common-components/base-container/base-container";
import * as styles from "@/app/components/recipe-detail/recipe.css";
import TagContainer from "@/app/common-components/tag-container/tag-container";
import { Ingredient } from "@/app/models/ingredient/ingredient";
import Instruction from "@/app/models/instructions/instruction";
import Tags from "./reciep-tags/recipe-tag";
import RecipeDescription from "./recipe-descritption/recipe-description";
import RecipeIngredients from "./reciep-ingredents.ts/ingredents";
import { useRootContext } from "@/app/custom-hooks/use-rootContext";
import ScrollContainer from "@/app/common-components/scroll-container/scroll-container";
import Loading from "@/app/common-components/loading/loading";

const Recipe = () => {
  
  const { recipe,recipeloading} = useRootContext();



  const tags = recipe?.getTags() || {};

  return (
    
    <BaseContainer className={styles.wrapper}>
      <TagContainer
        postion="center"
        wrapperClass={styles.tagContainerwrapper}
        container="content"
        layout="H"
        title="RECIPE INFO">
        <ScrollContainer>
        {Object.keys(tags).length > 0 ? (
          Object.entries(tags).map(([key, value]) => (
            <Tags 
              loading={recipeloading}
              key={key}
              wrapperClass={styles.tagWrapper}
              title={value as string}
              icon={key.toString()}
            />
          ))
        ) : (
          <Loading loadingStyle="circle"/>
        )}
        </ScrollContainer>

      </TagContainer>
      
  
      <TagContainer
        postion="start"
        container="content"
        wrapperClass={styles.tagIngrdentCotnrWrapper}
        layout="H"
        title="RECIPE INGREDIENTS"
      >
        <ScrollContainer wrapperClass="" theme="none">
          {recipe?.getIngredients()?.length ? (
            recipe.getIngredients()?.map((ingredient: Ingredient,index) => (
              <RecipeIngredients
                loading={recipeloading}
                key={index}
                ingredents={ingredient}
              />
            ))
          ) : (
            <Loading loadingStyle="circle" />
          )}
        </ScrollContainer>
      </TagContainer>


      <TagContainer
        postion="start"
        container="content"
        wrapperClass={styles.dscriptnCotnrWrapper}
        layout="V"
        title="RECIPE STEPS"
      >
        {recipe?.getInstructions()?.length ? (
          recipe.getInstructions()?.map((step: Instruction) => (
            <RecipeDescription
              key={step.getStepNo()}
              loading={recipeloading}
              wrapperClass={styles.dscriptnCotnrWrapper}
              point={Number(step.getStepNo())}
              description={step.getStep()}
            />
          ))
        ) : (
          <Loading loadingStyle="circle" />
        )}
      </TagContainer>
      
    </BaseContainer>
  );
};

export default Recipe;
