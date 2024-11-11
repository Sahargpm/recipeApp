import { BreakPoints } from "@/app/strings/break-points";
import { BaseTheme } from "@/app/theme/theme";
import { style } from "@vanilla-extract/css";

export const wrapper = style({
  padding:"2%",
  position: "relative",
  width: "100%",
  justifyContent:"center",
  alignItems:"center",
  display: "flex",
  marginTop:"1%",
  flexDirection: "column",
  overflow: "visible",
  '@media':{
    [BreakPoints.xxs.css]:{
      marginTop:"10%",
    }
  }

});

export const tagContainerwrapper= style({
  position: "relative",
  width: "98%",
  marginTop:"4%",
  display: "flex",
  flexDirection: "column",
  overflow: "visible", 
  '@media':{
    [BreakPoints.xxs.css]:{
      marginTop:"10%",
    }
  }

});
export const postetWrapper = style({
  float: "left", 
  width: "30%", 
  marginRight: "16px", 
  height: "60", 
  borderRadius:"5rem",
  position:"relative",
});
export const postetWrapper2 = style({
    width: "100%", 
    height: "100%", 
    borderRadius:"5rem",
    position:"relative",
  });


export const articleWrapper = style({
  width: "100%", 
  border: "solid 4px yellow",
  display:"block",
  height: "auto", 
  overflow: "visible", 
});
