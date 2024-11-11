
import { BoxStyle } from "@/app/strings/box-styling";
import { BreakPoints, HeightBreakPoints } from "@/app/strings/break-points";
import { BaseTheme } from "@/app/theme/theme";
import { Z_INDEX } from "@/app/utils/values";
import { keyframes, style } from "@vanilla-extract/css";


const dropAndScale = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateY(-100%) scale(0.8)', 
    boxShadow: '0 0 0 rgba(0, 0, 0, 0)', 
  },
  '60%': {
    opacity: 1,
    transform: 'translateY(10px) scale(1.05)', 
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', 
  },
  '100%': {
    opacity: 1,
    transform: 'translateY(0) scale(1)', 
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', 
  },
});


export const card = style({
  borderRadius: '12px',
  border:"solid 0.2rem "+BaseTheme.color.accent(0.3),
  overflow: 'hidden',
  boxShadow:BaseTheme.box.shadow.xlarge,
  animation: `${dropAndScale} 2s cubic-bezier(0.25, 0.75, 0.5, 1.25) forwards`, 
});


export const container=style({

       height:"30vh",
       zIndex:Z_INDEX.ITEM,
       width:"100%",
       position:"relative",
       display:"flex",
       scrollbarWidth:"none",
       overflowX:"scroll",
       alignItems:"center",
       flexShrink:"0",
       marginTop:"2rem",
       '@media':{
          [BreakPoints.xxs.css]:{
            
            height:"15vh",

          },
          [BreakPoints.xs.css]:{
            
            height:"20vh",

          },
          [BreakPoints.sm.css]:{
            
            height:"22vh",

          },
          [HeightBreakPoints.short]:{
            height:"40vh",
          },
       }
});

export const cardViewContainer = style({

       height: "99%",
       width:"12%",
       selectors: {
         '&:hover': {
   
           boxShadow:BoxStyle.shadow.xxlarge, 
           transform: "scale(2.5)",
           border:BaseTheme.box.border.style.solid,
           borderColor:BaseTheme.color.primary(0.3),
           backgroundColor:BaseTheme.color.primary(0.3),
          
        
         },
       },

       '@media':{
        [BreakPoints.xxs.css]:{
          
          width:"35%",
      

        },
        [BreakPoints.xs.css]:{
          
          width:"30%",
         

        },
        [BreakPoints.sm.css]:{
          
          width:"22%",
  
         
        },
        [BreakPoints.md.css]:{
          
          width:"18%",
     

        },
        [BreakPoints.lg.css]:{
          
          width:"13%",
      

        },
       


     }

     });
   
  
export const selected = style({
   
       borderWidth:"0.15rem",
       borderStyle:BoxStyle.border.style.solid,
       borderColor:BaseTheme.color.primary(),
    
   });

   export const noItemWrapper=style({

    display:"flex",
    height:"100%",
    width:"100%",
    marginTop:"5%",
    justifyContent:"center",
    alignItems:"center",


   })