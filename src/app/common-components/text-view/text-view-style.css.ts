import { BoxStyle } from "@/app/strings/box-styling";
import { BreakPoints } from "@/app/strings/break-points";
import { BaseTheme } from "@/app/theme/theme";
import { style, keyframes } from "@vanilla-extract/css";

const textHoverAnimation = keyframes({
  '0%': {
    transform: 'translateY(0)',  
    textShadow: 'none',
  },
  '100%': {
    transform: 'translateY(-3px)', 
    textShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',  
  },
});

const animationWrapper=style({

  ':hover': {
    color: BaseTheme.color.textPrimary(),  
    animation: `${textHoverAnimation} 0.3s forwards`,  
  },
 

});

const base = style({
  fontFamily: BaseTheme.typography.fonts.standard,
  transition: "transform 0.3s ease, color 0.3s ease, text-shadow 0.3s ease", 
   
 
});

const themeWrapper={

     primary:style([
       
       {
        color:BaseTheme.color.textPrimary(),

       }

     ]),
     secondary:style([

      {
        color:BaseTheme.color.textSecondary(),

       }

     ]),


}

const headingTextStyle = {
  mainHeading: style([
    base, {
      fontSize: BaseTheme.typography.sizes.heading.standard,
    }
  ]),
  subHeading: style([
    base, {
      fontSize: BaseTheme.typography.sizes.heading.small,
    }
  ]),
};

const cardViewTextStyle = {
  large: style([
    base, {
      fontSize: BaseTheme.typography.sizes.card.standard,
    }
  ]),
  small: style([
    base, {
      fontSize: BaseTheme.typography.sizes.card.small,
    }
  ]),
};

const buttonTextStyle = style([
  base, {
    fontSize: BaseTheme.typography.sizes.button.standard,
    '@media':{
      [BreakPoints.xxs.css]:{
       
        fontSize: BaseTheme.typography.sizes.button.mobile,
      }
    }
  }
]);

const tagContainerTextStyle = {
  blog: style([
    base, {
      color: BaseTheme.color.secondary(),
      fontSize: BaseTheme.typography.sizes.TagContainer.standard,
    }
  ]),
  content: style([
    base, {
      fontSize: BaseTheme.typography.sizes.TagContainer.small,
    }
  ]),
};

const paragrahTextStyle = style([
  base, {
    textAlign:'justify',   
    fontSize: BaseTheme.typography.sizes.paragrah.standard,
  }
]);

const copRightTextStyle = style([
  base, {
    fontSize: BaseTheme.typography.sizes.paragrah.standard,
    color:BaseTheme.color.textSecondary(),
  }
]);

export const TextStyles = {
  headingTextStyle,
  cardViewTextStyle,
  buttonTextStyle, 
  tagContainerTextStyle,
  paragrahTextStyle,
  copRightTextStyle,
  themeWrapper,
  animationWrapper,
};
