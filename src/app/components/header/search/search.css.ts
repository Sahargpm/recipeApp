
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { createScrollVariants } from "@/app/utils/operations/scroll-varient";
import { BreakPoints } from "@/app/strings/break-points";
import { BaseTheme } from "@/app/theme/theme";

export const wrapper=style({

  height:"100%",
  alignItems:"center",
  justifyContent:"center",
  display:"flex",
  backgroundColor:BaseTheme.color.none(),
  position:"relative",
  width:"90%",

  '@media':{
    
    [BreakPoints.xxs.css]:{
         
      width:"100%",

    },
    [BreakPoints.xs.css]:{
         
      width:"90%",

    },
  }


})


export const input=style({

  height:"100%",
  display:"flex",
   border:"0",
   fontSize:"16px",
   width:"100%",
  
   position:"absolute",
   backgroundColor:BaseTheme.color.secondary(),  
   '@media':{
    
    [BreakPoints.xxs.css]:{
      paddingLeft:"1rem",
      width:"100%",

    },
    [BreakPoints.xs.css]:{
         
      width:"100%",

    },
  }



})

export const searchBtn=style({



  zIndex:"99999",
  right:"0",
  width:"10%",
  position:"absolute",
  display:"flex",
  alignContent:"center",
  alignItems:"center",
  justifyContent:"center",
  '@media':{

    [BreakPoints.xxs.css]:{
         
      width:"25%",


    },
    [BreakPoints.xs.css]:{
         
      width:"20%",

    },
    [BreakPoints.sm.css]:{
     
      width:"15%",
      

    },
    [BreakPoints.md.css]:{
          
      width:"10%",
  

    },
    [BreakPoints.lg.css]:{
          
      width:"10%",
  

    },
              
  }
})


    const  heightWrapper=style({

      display:"flex",
   
   });
   const heighOnScrolled=style({
   
        height:"60%",
        '@media':{
    
          [BreakPoints.xxs.css]:{
               
            height:"35%",
      
          },
          [BreakPoints.xs.css]:{
               
            height:"45%",
      
          },
       
       
               
        }
     
   
   });
   const heighOnNotScrolled=style({
   
         height:"40%",
         
         '@media':{
    
          [BreakPoints.xxs.css]:{
               
               
            height:"35%",
      
      
          },
          [BreakPoints.xs.css]:{
               
               
            height:"35%",
    
    
        },
         
        }
      
   });
   
   
   export const wrapperVariants=recipe(createScrollVariants({base:heightWrapper,scrolled:heighOnScrolled,notScrolled:heighOnNotScrolled}))
   
   
    
   