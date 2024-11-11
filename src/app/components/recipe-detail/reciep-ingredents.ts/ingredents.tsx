import CardView from "@/app/common-components/card-view/card-view"
import * as styles from "@/app/components/recipe-detail/reciep-ingredents.ts/ingredent.css"
import { Ingredient } from "@/app/models/ingredient/ingredient";
import { BaseProps } from "@/app/utils/shared-types/shared-types";


interface ReciepeIngredentsProps extends Omit<BaseProps,'theme'>
{

ingredents?:Ingredient,

}



const ReciepeIngredents=({ingredents,loading}:ReciepeIngredentsProps)=>{


      return (
            
      
           <CardView key={ingredents?.getName()} cardSize='small' imagUrl={ingredents?.getImageUrl()} title={ingredents?.getName()} loading={loading} wrapperClass={styles.carviewWrapper}></CardView>
           
            

    );


}



export default ReciepeIngredents;