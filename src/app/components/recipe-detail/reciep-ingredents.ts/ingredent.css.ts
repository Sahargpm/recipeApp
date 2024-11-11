import { BoxStyle } from "@/app/strings/box-styling";
import { BreakPoints } from "@/app/strings/break-points";
import { BaseTheme } from "@/app/theme/theme";
import { style } from "@vanilla-extract/css";

export const carviewWrapper=style({

    height:"17vh",
    width:"10%",
    overflow:"visible",
    boxShadow:BaseTheme.box.shadow.medium,
    '@media':{
        [BreakPoints.xxs.css]:{
            height:"10vh",
            marginLeft:"1rem",
            width:"30%",
        },
        [BreakPoints.xs.css]:{
         
            width:"22%",
        },
        [BreakPoints.sm.css]:{
           
  
            width:"18%",
        },
        [BreakPoints.md.css]:{
           
    
            width:"13%",
        },
        [BreakPoints.lg.css]:{
     
            width:"11%",
        }
    }

})