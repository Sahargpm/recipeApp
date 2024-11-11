'use client'
import Image from "next/image";
import logoImage from "/Users/ahmadismail/Desktop/Desktop - Ahmad’s MacBook Pro/Development/Web/FoodMood/saharfood/public/assests/logo.png";
import BaseContainer from "@/app/common-components/base-container/base-container";
import * as styles from "@/app/components/header/logo/logo.css";
import { getScrollVariant } from "@/app/utils/operations/scroll-varient";
import useScroll from "@/app/custom-hooks/useScroll";
import { SCROLL_CONFIG, ThemeValues } from "@/app/utils/values";
import clsx from "clsx";
import { BaseProps } from "@/app/utils/shared-types/shared-types";


const Logo = ({ wrapperClass,theme='secondary'}: BaseProps) => {
 

        
 
 const isScroll = getScrollVariant(useScroll(SCROLL_CONFIG.SCROLL_POINT));

     const themeStyle=theme===ThemeValues.primary?styles.backgroundWrapper.primary:styles.backgroundWrapper.secondary;


  return (

    <BaseContainer className={clsx(wrapperClass)}>
      
     
     <img
        className={clsx(styles.variants({isScroll}),themeStyle)}
        src={"/assests/logo.png"}
        alt="Food mood"
      /> 
      
    </BaseContainer>
  );
};

Logo.displayName="Logo"; //for debuging 

export default Logo;
