
import { BoxStyle } from "../strings/box-styling";
import { SCROLL_CONFIG, ThemeValues } from "./values";



export type Scroll = "scrolled" | "notScrolled";

export type ScrollState = typeof SCROLL_CONFIG.SCROLLED | typeof SCROLL_CONFIG.NOT_SCROLLED;

export interface ScrollAdaptive{
  base: string;
  variants: 
  {
    isScroll: Record<ScrollState, string>;
    
  };
}

export type CardSize='large'|'small';
export  type Position='left'|'right'|'up'|'down';
export type BaseThemeTypes='primary'|'secondary'|'none'

export type SocialMediaThem=BaseThemeTypes;

export type ContainerType='blog' | 'content';

export type Color = BaseThemeTypes| 'accent' | 'textPrimary' | 'textSecondary';

export type SocialPlatform ='facebook' | 'twitter' | 'instagram';


export type TextAnimation='shake'|'wave'|'none';

export type Layout='V'|'H';

export type ButtonStyle='round'|'standard';

export type ButtonTypes = 'iconic' | 'textual' | 'combo';

export type ViewType =
|'button'
|'heading'
|'paragraph'
|'LargeCardView'
|'smallCardView'
|'content'
|'blog' 
|'copyRight'






