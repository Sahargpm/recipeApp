import { BoxStyle } from "@/app/strings/box-styling";
import { BaseTheme } from "@/app/theme/theme";
import { BaseThemeTypes, ButtonStyle} from "@/app/utils/types";
import { style, keyframes } from "@vanilla-extract/css";

  
export const wrapper=style({

   display:"flex",
   alignItems:"center",
   justifyContent:"center",
   flexDirection:"row",


});
export const textWrapperWithIcon=style({
paddingLeft:"0.2rem",


});
  


const ButtonStyles = {

  round: style([
    {
      borderStyle: BaseTheme.box.border.style.solid,
      border: BaseTheme.box.border.width.standard,
      borderColor: BaseTheme.color.secondary(),
      borderRadius: BaseTheme.box.border.radius.standard,
      cursor: "pointer",
      transition: "background-color 0.3s ease, transform 0.2s ease", 
    
    },
  ]),

  standard: style([
    {
      border: "solid 0.1rem " + BaseTheme.color.secondary(),
      cursor: "pointer",
      transition: "background-color 0.3s ease, transform 0.2s ease",

    },
  ]),
};

const buttonTheme = {
  
  none: style([
    {
    
      padding: "0.5rem 1rem",
      background:BaseTheme.color.accent(0.4),
      cursor: "pointer",
      ':hover': {
        backgroundColor: BaseTheme.color.primary(0.3),
      },
      ':focus': {
        backgroundColor: BaseTheme.color.primary(0.5),
        
      },
    },
  ]),

  primary: style([
    {
      padding: "0.5rem 1rem",
      backgroundColor: BaseTheme.color.primary(),
      cursor: "pointer",
      ':hover': {
        backgroundColor: BaseTheme.color.primary(),
        transform: "scale(1.05)",
      },
      ':focus': {
        outline: "2px solid " + BaseTheme.color.primary(),
      },
      textAlign: "center",
      borderRadius: BaseTheme.box.border.radius.standard,
      boxShadow:BaseTheme.box.shadow.equalSides,
      transition: "background-color 0.3s ease, transform 0.2s ease",
    },
  ]),

  secondary: style([
    {
      padding: "0.5rem 1rem",
      backgroundColor: BaseTheme.color.secondary(),
      cursor: "pointer",
      ':hover': {
        backgroundColor: BaseTheme.color.secondary(),
        transform: "scale(1.05)",
      },
      ':focus': {
        outline: "2px solid " + BaseTheme.color.primary(),
      },
      borderRadius: BaseTheme.box.border.radius.standard,
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      transition: "background-color 0.3s ease, transform 0.2s ease",
    },
  ]),
};

export const buttonStyles: Record<ButtonStyle, string> = {
  round: ButtonStyles.round,
  standard: ButtonStyles.standard,
};

export const buttonThemes: Record<BaseThemeTypes, string> = {
  none: buttonTheme.none,
  primary: buttonTheme.primary,
  secondary: buttonTheme.secondary,
};
