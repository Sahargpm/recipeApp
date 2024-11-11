export const Typography = {
  
  fonts: {
  
    standard: 'Georgia, serif',
    heading: 'Arial, sans-serif',
  
  },

  sizes: {
 
    button: {
      small: 'calc(0.5vw + 0.2rem)',  
      standard:'calc(0.5vw + 0.4rem)',
      large: 'calc(0.5vw + 0.8rem)',
      mobile:'calc(0.5vw + 0.6rem)',
    },
   
    card:{

      small: 'calc(0.5vw + 0.3rem)',  
      standard:'calc(0.5vw + 0.5rem)',
      large: 'calc(0.5vw + 0.8rem)',
      mobile:'calc(0.5vw + 0.8rem)',
      
      },

     TagContainer:{

      small: 'calc(0.5vw + 0.4rem)',  
      standard:'calc(0.5vw + 0.6rem)',
      large: 'calc(0.5vw + 0.8rem)',
      mobile:'calc(0.5vw + 0.8rem)',
      

     },
      
    heading: {
      small: 'calc(0.5vw + 0.5rem)',  
      standard:'calc(0.5vw + 0.8rem)',
      large: 'calc(0.5vw + 1rem)',
      mobile:'calc(0.5vw + 0.8rem)',

    },
    
    paragrah: {
      small: 'calc(0.5vw + 0.4rem)',  
      standard:'calc(0.5vw + 0.5rem)',
      large: 'calc(0.5vw + 0.6rem)',
      mobile:'calc(0.5vw + 0.8rem)',
    },
  },
  lineHeights: {
    heading: {
      small: '1.3',
      medium: '1.4',
      large: '1.5',
      extraLarge: '1.6',
    },
    body: {
      small: '1.5',
      medium: '1.6',
      large: '1.8',
    },
  },
  fontWeights: {
    light: 300,
    regular: 400,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
  }, 
} as const;
