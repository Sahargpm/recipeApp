import { omit } from "lodash";
import { Scroll, SocialPlatform, BaseThemeTypes } from "./types";


export const SCROLL_CONFIG = {
    SCROLL_POINT: 100 as number,
    SCROLLED: "scrolled" as Scroll,
    NOT_SCROLLED: "notScrolled" as Scroll ,
    
  };

export const Z_INDEX={
   
    background:"1",
    search:"2",
    ITEM:"2",
    HEADER:"3",
}

export const ThemeValues: Record<BaseThemeTypes, BaseThemeTypes> = {

  primary: "primary",
  secondary:"secondary",
  none:"none",


};
 
export const SocialLinks:Record<SocialPlatform, string>= {

  facebook: 'https://facebook.com',
  twitter: 'https://twitter.com',
  instagram: 'https://instagram.com',
  
};

export const copyRight="2024 SaharAkhat@gpm. All rights reserved";




