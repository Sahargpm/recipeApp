import { BaseThemeTypes, TextAnimation, ViewType } from "@/app/utils/types";
import { TextStyles } from "./text-view-style.css";
import clsx from "clsx";

export const renderTextView = (viewType:ViewType,message:string,theme:BaseThemeTypes,animation:TextAnimation) => {
    
   const themeWrapper=theme=='primary'?TextStyles.themeWrapper.primary:TextStyles.themeWrapper.secondary;
   const animationWrapper=animation==='shake'?TextStyles.animationWrapper:'';

    switch (viewType) {
     
       case 'button':

        return <span className={clsx(TextStyles.buttonTextStyle,themeWrapper,animationWrapper)}>{message}</span>;
    
       case 'LargeCardView':

          return <span className={clsx(TextStyles.cardViewTextStyle.large,themeWrapper,animationWrapper)}>{message}</span>;

       case 'smallCardView':

          return <span className={clsx(TextStyles.cardViewTextStyle.small,themeWrapper,animationWrapper)}>{message}</span>;
      
          case 'content':

          return <span className={clsx(TextStyles.tagContainerTextStyle.content,themeWrapper,animationWrapper)}>{message}</span>;

          case 'blog':

          return <span className={clsx(TextStyles.tagContainerTextStyle.blog,themeWrapper,animationWrapper)}>{message}</span>;
        
          case 'heading':

          return <span className={clsx(TextStyles.headingTextStyle.mainHeading,themeWrapper,animationWrapper)}>{message}</span>;
       
          case 'copyRight':

          return  <p className={clsx(TextStyles.copRightTextStyle,themeWrapper,animationWrapper)}>&copy;{message}</p>

          case 'paragraph':

          return <p className={clsx(TextStyles.paragrahTextStyle,themeWrapper,animationWrapper)}>{message}</p>;

      default:
       
      return message ? <p className={clsx(TextStyles.buttonTextStyle,themeWrapper,animationWrapper)}>{message}</p> : null; 
    }
  };