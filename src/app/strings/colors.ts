import { Color } from "../utils/types";

export const colorPalette: Record<Color, string> = {
 
  primary: '255, 97, 29',  
  secondary: '255, 255, 255',
  accent: '225, 217, 209',
  textPrimary: '42,49,50',
  textSecondary: '255,255,255',
  none: "transparent",

};

export const Colors: Record<Color, (opacity?: number) => string> = {
  primary: (opacity = 1) => `rgba(${colorPalette.primary}, ${opacity})`,
  secondary: (opacity = 1) => `rgba(${colorPalette.secondary}, ${opacity})`,
  accent: (opacity = 1) => `rgba(${colorPalette.accent}, ${opacity})`,
  textPrimary: (opacity = 1) => `rgba(${colorPalette.textPrimary}, ${opacity})`,
  textSecondary: (opacity = 1) => `rgba(${colorPalette.textSecondary}, ${opacity})`,
  none: () => "transparent",
};

