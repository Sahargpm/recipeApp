import { style } from "@vanilla-extract/css";
import { BaseTheme } from "../theme/theme";
export const background = style({
    position: "relative", 
    '::before': {
      content: '""',
      position: "absolute",
      top: 0,
      margin:0,
      padding:"0",
      boxSizing:"border-box",
      left: 0,
      width:"99%",
      background:"#fafafa",
      height: "100%",
      backgroundImage: "url('/assests/wallpaper.png')",
      backgroundRepeat: "repeat",  
      backgroundSize: "auto",     
      opacity:0.2,
      zIndex: -1,
    },
  });
  

export const bodyWrapper = style({
  
    background:BaseTheme.color.secondary(0.3),
    
  
  });