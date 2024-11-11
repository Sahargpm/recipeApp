import { BaseTheme } from "@/app/theme/theme";
import { style } from "@vanilla-extract/css";

export const drawerContainer = style({
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    width: "50%", 
    contain: "content",
    alignItems: "center",
    background: "var(--drawer-background, red)", 
    zIndex: "999",
    position: "fixed",
    top: 0, 
    left: 0, 
    transform: "translateX(-100%)", 
    transition: "transform 0.3s ease-in-out", 
});

export const drawerContainerOpen = style({
    transform: "translateX(0)", 
});


export const drawerHead = style({
    height: "20%",
    position:"relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:BaseTheme.color.primary(),
    width: "100%",
});

export const cancelButton=style({

     position:"absolute",
    backgroundColor:BaseTheme.color.none(),
     display:"flex",
     top:"0.1rem",
     right:"0.1rem",



});





export const drawerBody = style({
    height: "80%",
    position: "relative",
    backgroundColor:BaseTheme.color.secondary(),
    width: "100%",
});


export const socialMediaWrapper=style({
    display:"flex",
    height:"30%",
    width:"100%",
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"column",
    
})
export const socialMediaIconeWrapper=style({

    borderBottom:"solid 3px "+BaseTheme.color.textSecondary(0.3),
    height:"30%",
    width:"100%",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    
})