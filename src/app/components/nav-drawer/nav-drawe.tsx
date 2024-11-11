import BaseContainer from "@/app/common-components/base-container/base-container";
import Logo from "../header/logo/logo";
import * as styles from "@/app/components/nav-drawer/nav-drawer.css";
import { ReactNode, useContext } from "react";
import clsx from "clsx";
import Button from "@/app/common-components/button/button";
import { useRootContext } from "@/app/custom-hooks/use-rootContext";
import MyIcon from "@/app/common-components/Icon/my-icon";
import { ThemeValues } from "@/app/utils/values";
import { BaseTheme } from "@/app/theme/theme";
import SocialMediaList from "@/app/common-components/scoial-media/social-media-list";
import { sociaListWraper } from "@/app/common-components/scoial-media/social-media.css";

const Drawer = ({ children }: { children?: ReactNode }) => {

  const { drawer, setDrawer } = useRootContext();

  const handleButtonClick = () => {
    if (setDrawer) {
      setDrawer(false);
    }
  };

  return (


    <BaseContainer  className={clsx(styles.drawerContainer, drawer && styles.drawerContainerOpen)}>
      
   
          <div className={styles.drawerHead}> 
         <Button buttonStyle='round' wrapperClass={styles.cancelButton} onClick={handleButtonClick} buttonType='iconic'>
          <MyIcon size={30} theme={ThemeValues.secondary}  title="cancel"></MyIcon>
        </Button>
           <Logo wrapperClass={styles.drawerHead} />
        </div>

      <div className={styles.drawerBody}>
     <SocialMediaList align="center" theme={ThemeValues.secondary} iconSize={40} iconeWrapper={styles.socialMediaIconeWrapper} wrapperClass={styles.socialMediaWrapper}></SocialMediaList>
      </div>

    
    </BaseContainer>
  );
};

export default Drawer;
