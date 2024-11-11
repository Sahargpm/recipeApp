import { BoxStyle } from "@/app/strings/box-styling";
import { BreakPoints } from "@/app/strings/break-points";
import { BaseTheme } from "@/app/theme/theme";
import { style } from "@vanilla-extract/css";

export const wrapper = style({
    borderRadius: "1rem",
    position: "relative",
    display: "flex",
    alignItems: "center",
    marginLeft: "2%",
    flexShrink: 0,
    flexDirection: "column",
    justifyContent: "center",
    background: BaseTheme.color.secondary(), 
    boxShadow: BoxStyle.shadow.enhanced,
});

export const cardImageWraper = style({
    height: "80%",
    padding: "0.5rem",
    width: "80%",
    '@media':{
        [BreakPoints.xxs.css]:{
         
          height: "80%",
        }
  
      }
});

export const cardTitle = style({
    height: "20%",
    justifyContent:"center",
    display:"flex",
    paddingBottom:"0.5rem",
    alignItems:"center",
    width: "99%",
    '@media':{
      [BreakPoints.xxs.css]:{
       
        height: "20%",
      }

    }
});
