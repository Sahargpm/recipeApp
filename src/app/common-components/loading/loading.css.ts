import { BaseTheme } from "@/app/theme/theme";
import { style, keyframes } from "@vanilla-extract/css";



const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

export const loaderContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  width: '10rem', 
  height: '10rem',
});


export const spinner = style({
  position: 'absolute',
  width: '100%',
  height: '100%',
  border: '8px solid',
  borderColor:BaseTheme.color.primary(), 
  borderTop: '8px solid',
  borderTopColor:BaseTheme.color.secondary(), 
  borderRadius: '50%',
  animation: `${spin} 1s linear infinite`,
});


export const spinnerInner = style({
  width: '100%',
  height: '100%',
  backgroundColor: 'transparent',
  borderRadius: '50%',
});

// Style for the title text inside the spinner
export const loaderTitle = style({
  position: 'absolute',
  fontWeight: 'bold',
  textAlign: 'center',
  whiteSpace: 'nowrap',
});

const shimmerAnimation = keyframes({
  '0%': { backgroundPosition: '-200% 0' },
  '100%': { backgroundPosition: '200% 0' },
});


export const shimmer = style({
  backgroundColor: BaseTheme.color.accent(0.5), 
  backgroundImage: `linear-gradient(
    to left,
    ${BaseTheme.color.secondary(0.5)},
    ${BaseTheme.color.accent(0.4)},
    ${BaseTheme.color.accent(0.5)}
  )`,
  backgroundSize: '200% 100%',
  animation: `${shimmerAnimation} 1.5s infinite linear`,
  borderRadius: '8px',   
});
