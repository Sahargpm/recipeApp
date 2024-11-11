import { Interface } from "readline";
import { Scroll, ScrollAdaptive, ScrollState } from "../types";
import { SCROLL_CONFIG } from "../values";



export function getScrollVariant(isScroll: boolean): Scroll {

  return isScroll ? SCROLL_CONFIG.SCROLLED : SCROLL_CONFIG.NOT_SCROLLED;

}

interface CreateScrollVariantsParams {

  base: string;
  scrolled: string;
  notScrolled: string;

}

export const createScrollVariants = ({
  base,
  scrolled,
  notScrolled,
}:CreateScrollVariantsParams

): ScrollAdaptive => {
  
  return {

    base:base, 
    variants: {
      
        isScroll: {
        
        [SCROLL_CONFIG.SCROLLED]: scrolled, 
        [SCROLL_CONFIG.NOT_SCROLLED]: notScrolled,
      
      } as Record<ScrollState, string>, 


    },
  
  };

};
