import BaseContainer from "@/app/common-components/base-container/base-container";
import * as styles from "@/app/components/Items/Item.css";
import CardView from "@/app/common-components/card-view/card-view";
import clsx from "clsx";
import { useRootContext } from "@/app/custom-hooks/use-rootContext";
import ScrollContainer from "@/app/common-components/scroll-container/scroll-container";
import TextView from "@/app/common-components/text-view/text-view";
import { ThemeValues } from "@/app/utils/values";

const Item = () => {

  
  const { itemManager,loading,handelItemClik} = useRootContext();
    
  if(itemManager?.getItems().length==0&&!loading)
    {
       
      return <TextView wrapperClass={styles.noItemWrapper} viewType="heading" theme={ThemeValues.primary} message="Item not found....!!"></TextView>
    }
  
  else if (loading)
 
  {
    return <TextView wrapperClass={styles.noItemWrapper} viewType="heading" theme={ThemeValues.primary} message="Loading....!"></TextView>

  }

    else
  return (

 
     <BaseContainer className={styles.container}>
     
        <ScrollContainer> 
     
       {itemManager &&
     
        itemManager.getItems().map((item, index) => {
        
          const { id, title, imageUrl } = item;
        
          const isSelected = itemManager.getSelectedItemIndex() === index;

          return (

            <CardView
             cardSize='small'
              key={id}
              handCardClik={() =>handelItemClik(id)}
              wrapperClass={clsx({ [styles.selected]: isSelected },styles.cardViewContainer,styles.card)}
              title={title!} 
              loading={loading}
              imagUrl={imageUrl!}/>

          );
        }
        )}
  </ScrollContainer>
    </BaseContainer>
  
  );
};

export default Item;
