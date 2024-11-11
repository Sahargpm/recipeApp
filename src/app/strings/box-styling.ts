import { style } from "@vanilla-extract/css";

const basePadding = '0.5rem';
const baseMargin = '0.5rem';

export const BoxStyle = {


  padding: {
    basic: basePadding,
    standard: '1rem',
    enhanced: "1.5rem",
    extreme: "2rem",
    extraLarge: '2.5rem',
  },

  
  margin: {
    basic: baseMargin,
    standard: '1rem',
    enhanced: '1.5rem',
    extreme: '2rem',
    extraLarge: '2.5rem', 
  },

  border: {
    style: {
      solid: 'solid' as const,
      groove: 'groove',
      double: 'double',
    },
    radius: {
      basic: '2rem',
      standard: '3rem',
      enhanced: '4rem',
      extreme: '5rem',
      rounded: '50%', 
    },
    width: {
      basic:   '0.3rem',
      standard: '0.5rem',
      enhanced: '0.8rem',
      extreme: '1rem',
    },

  },


  font: {
    size: {
      xsmall: '10px',
      small: '12px',
      medium: '16px',
      large: '20px',
      xlarge: '24px',
      xxlarge: '28px',
      xxxlarge: '32px', 
    },
    weight: {
      hairline: '100',
      thin: '200',
      regular: '400',
      medium: '500',
      bold: '700',
      extrabold: '800',
      black: '900', 
      ultraBlack: '950',
    },
  },

 
  shadow: {
    xsmall: '0px 1px 2px rgba(0, 0, 0, 0.05)',
    small: '0px 1px 3px rgba(0, 0, 0, 0.1)',
    medium: '0px 3px 6px rgba(0, 0, 0, 0.15)',
    large: '0px 5px 10px rgba(0, 0, 0, 0.2)',
    xlarge: '0px 10px 20px rgba(0, 0, 0, 0.3)',
    xxlarge: '2px 60px 90px rgba(0, 0, 0, 4)',
    equalSides: '0px 0px 10px rgba(0, 0, 0, 0.2)', 
    enhanced: '0px 20px 40px rgba(0, 0, 0, 0.5)', 
  },


}


