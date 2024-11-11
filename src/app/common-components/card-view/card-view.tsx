import BaseContainer from "@/app/common-components/base-container/base-container";
import * as styles from "@/app/common-components/card-view/card-view.css";
import TextView from "@/app/common-components/text-view/text-view";
import clsx from "clsx";
import Loading from "../loading/loading"; 
import { ViewType } from "@/app/utils/types";
import { BaseProps } from "@/app/utils/shared-types/shared-types";
import { CardSize } from "@/app/utils/types";
import { partial } from "lodash";

interface CardViewpProps extends BaseProps {
  title?: string;
  cardSize:CardSize;
  imagUrl?: string;
  handCardClik?: () => void;
}

const CardView= ({ loading = true, title, imagUrl, wrapperClass,cardSize="large",handCardClik }: CardViewpProps) => {

         const card:ViewType=cardSize==='large'?'LargeCardView':'smallCardView';
   
  return (

    
    <BaseContainer onClick={handCardClik} className={clsx(styles.wrapper, wrapperClass)}>
      
        
      
      {loading ? (
      
        <Loading loadingStyle="shimmer" height="100%" width="100%"/>
      ) : (
       
        <>
          <img  key={title} className={styles.cardImageWraper} src={imagUrl} alt="cardView Imge mising" />
         
          <TextView  wrapperClass={styles.cardTitle} message={title!}  viewType={card} />
        </>
      )}

    </BaseContainer>
  );
};

export default CardView;
