import { BoxStyle } from "@/app/strings/box-styling";
import { BreakPoints } from "@/app/strings/break-points";
import { background } from "@/app/styles/backgorund.css";
import { BaseTheme } from "@/app/theme/theme";
import { createScrollVariants } from "@/app/utils/operations/scroll-varient";
import { style } from "@vanilla-extract/css";

import { recipe } from "@vanilla-extract/recipes";


export const backgroundWrapper={

    primary:style({

      background:BaseTheme.color.primary(),
    }),

  secondary:style({
    background:BaseTheme.color.secondary(),
  })



};

 const baseLogoWrapper = style({
  
   display:"flex",
   flexDirection:"row",
   alignItems:"center",
   justifyContent:"center",
   borderRadius:BoxStyle.border.radius.rounded,
 
});

 const onScrollLogo= style({
  
  display:"flex",
  height:"46px",
  width:"46px",
  '@media':{
 
    [BreakPoints.xxs.css]:{
         
      height:"100px",
       width:"100px",

    },
    [BreakPoints.xs.css]:{
         
      height:"40px",
      width:"40px",

    },
    [BreakPoints.md.css]:{
         
      height:"40px",
      width:"40px",

    },
    [BreakPoints.lg.css]:{
         
    

    },
    [BreakPoints.xl.css]:{
         
     

    },
    

     

  }

 

});

 const onNotScrollLogo = style({
  
  display:"flex",
  height:"100px",
  width:"100px",
  '@media':{
    
    [BreakPoints.xxs.css]:{
         
      height:"100px",
      width:"100px",

    },
    [BreakPoints.xs.css]:{
            
      height:"70px",
      width:"70px", 
      

    },
    [BreakPoints.md.css]:{
      height:"80px",
      width:"80px", 
      
    },
    [BreakPoints.lg.css]:{
      height:"90px",
      width:"90px",
   

    },
   
    

     

  }

});


export const variants = recipe(
  createScrollVariants({
    base: baseLogoWrapper,
    scrolled: onScrollLogo,
    notScrolled:onNotScrollLogo,
  })
);
