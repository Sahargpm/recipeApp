
import { BoxStyle } from "@/app/strings/box-styling";
import { style } from "@vanilla-extract/css";

export const wrapper = style({
    display: "flex",
    alignItems:"center",
    maxHeight:"100%",
    maxWidth:"100%",
    marginLeft:"0.1rem",
    flexDirection:"column",
    position:"relative",
    overflow:"hidden", 
  });

  export const sociaListWraper= style({
    display:"flex",
    listStyle:"none",
    maxWidth:"100%",
    marginLeft:"0.2rem",
    position:"relative",
    width:"100%",
  });

  export const socilaMediaIconePostion={

    start:style({
     
      alignContent:"start",
      alignItems:"start",
      justifyContent:"start",
    }),
    center:style({

      alignContent:"center",
      alignItems:"center",

      justifyContent:"center",

    }),



  }
  
  export const iconOnHover = style({
  
    borderColor:"transparent",
    transition: 'border-color 0.3s ease, transform 0.2s ease',
  
    ':hover': {
      

      transform: "scale(1.5)",
      borderWidth: BoxStyle.border.width.basic,
      borderRadius: BoxStyle.border.radius.rounded,
    }
  });

  

