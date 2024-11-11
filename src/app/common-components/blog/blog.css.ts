import { BreakPoints } from "@/app/strings/break-points";
import { BaseTheme } from "@/app/theme/theme";
import { style } from "@vanilla-extract/css";

export const wrapper = style({
  height: "100%",
  width: "100%",
  marginTop:"1rem"
});


const postetWrapper = style({
  position: "relative",
  width:"20%",
  aspectRatio:"8/5",
  display:"flex",
  objectFit:'cover',
  borderRadius:"1.5rem",
  alignItems:"center",
  justifyContent:"center",
  '@media': {
    [BreakPoints.xxs.css]: {
      float:"none",
      display: "flex",
      width: "100%", 
      height: "20%", 
      flexDirection: "column", 
     
    },
    [BreakPoints.xs.css]: {
      width: "100%", 
      height: "30%",
     
    },
    [BreakPoints.sm.css]: {
      width: "50%", 
      height: "30%",
     
    },
  },
});


export const postetPositionLeft = style([
  postetWrapper,
  {
    float: "left", 
    marginRight:"0.7rem",
  
    '@media': {
      [BreakPoints.xxs.css]: {
        margin:"0.1rem",

      },
    },
  },
]);

export const postetPositionRight = style([
  postetWrapper,
  {
    float: "right", 
    marginLeft:"0.7rem",
  
    '@media': {
      [BreakPoints.xxs.css]: {
        margin:"0.1rem",
      },
    },
  },
]);

export const articleWrapper = style({
  width: "100%", 
  display: "block",
  height: "auto", 
  overflow: "visible", 
  '@media': {
    [BreakPoints.xxs.css]: {
      width: "100%", 
      textAlign: "center", 
    },
  },
});