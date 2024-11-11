import { BoxStyle } from "@/app/strings/box-styling";
import { BreakPoints } from "@/app/strings/break-points";
import { BaseTheme } from "@/app/theme/theme";
import { keyframes, style } from "@vanilla-extract/css";


export const wrapper = style({
    paddingLeft:"3%",
    paddingRight:"3%",
    marginTop:"2%",
    position: "relative",
    width: "100%",
    justifyContent:"center",
    alignItems:"center",
    display: "flex",
    flexDirection: "column",
    overflow: "visible",

  });

 
  export const tagWrapper = style({
    height: "2.5rem",    
    display: "flex",
    marginLeft:"0.3rem",
    flexShrink:"0",
    maxWidth:"max-content",
    border: "solid 0.2rem",
    borderRadius:"2rem",
    borderColor:BaseTheme.color.accent(),
    alignItems:"center",
    boxShadow:BaseTheme.box.shadow.equalSides,
});

  

  export const tagContainerwrapper = style({
    position: "relative",
    width: "98%",
    marginTop:"2%",
    display: "flex",
    flexDirection: "column",


  });
  
  export const tagIngrdentCotnrWrapper = style({
    position: "relative",
    width: "98%",
    marginTop:"2%",
    display: "flex",
    flexDirection: "column",
    overflow: "visible",
    '@media':{
      [BreakPoints.xxs.css]:{
        marginTop:"8%",
      }
    }

  });
  export const dscriptnCotnrWrapper = style({
    position: "relative",
    width: "98%",
    marginTop:"2%",
    paddingBottom:"2rem",
    display: "flex",
    flexDirection: "column",
    overflow: "visible",
    '@media':{
      [BreakPoints.xxs.css]:{
        marginTop:"8%",
      }
    }

  });

  




