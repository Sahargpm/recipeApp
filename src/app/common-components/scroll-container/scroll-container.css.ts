import { BreakPoints } from "@/app/strings/break-points";
import { BaseTheme } from "@/app/theme/theme";
import { style } from "@vanilla-extract/css";

export const wrapper=style({

    display:"flex",
    height:"100%",
    position:"relative",
    justifyContent:"end",
    alignItems:"center",
    width:"100%",
    flexDirection:"row",


})

export const wrapperleftButton=style({
    display:"flex",
    width:"6%",
    left:"0",
    alignItems:"center",
    justifyContent:"center",
    position:"absolute",
    height:'auto',
    flexDirection:"row",
    '@media':{
    
        [BreakPoints.xxs.css]:{
           
          visibility:"hidden",
    
    
        },
        [BreakPoints.xs.css]:{
           
      
          width:"9%",
    
        },
        [BreakPoints.sm.css]:{
           
      
          width:"8%",
    
        },
        [BreakPoints.md.css]:{
           
      
          width:"7%",
    
        },
        [BreakPoints.lg.css]:{
           
      
          width:"6%",
    
        },
        [BreakPoints.xl.css]:{
           
      
          width:"5%",
    
        },
        
    
      }


})
export const wrapperrightButton=style({

    display:"flex",
    height:'min-content',
    right:"0",
    zIndex:"1",
    alignItems:"center",
    justifyContent:"center",
    position:"absolute",
    width:"5%",
    flexDirection:"row",
    '@media':{
    
        [BreakPoints.xxs.css]:{
           
          visibility:"hidden",
    
    
        },
        [BreakPoints.xs.css]:{
           
      
          width:"9%",
    
        },
        [BreakPoints.sm.css]:{
           
      
          width:"8%",
    
        },
        [BreakPoints.md.css]:{
           
      
          width:"7%",
    
        },
        [BreakPoints.lg.css]:{
           
      
          width:"6%",
    
        },
        [BreakPoints.xl.css]:{
           
      
          width:"5%",
    
        },
    
      }


})
export const wrapperContent=style({

    display:"flex",
    position:"relative",
    width:"100%",
    paddingLeft:"1rem",
    paddingRight:"1rem",
    scrollbarWidth:'none',
    height:"100%", 
    padding:"2%",
    overflowX:"scroll",
    flexDirection:"row",


})
