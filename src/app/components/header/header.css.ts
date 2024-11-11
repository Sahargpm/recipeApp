import { BoxStyle } from '@/app/strings/box-styling';
import { BreakPoints, HeightBreakPoints } from '@/app/strings/break-points';
import { BaseTheme } from '@/app/theme/theme';
import { createScrollVariants } from '@/app/utils/operations/scroll-varient';
import { Z_INDEX } from '@/app/utils/values';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';



const headerBase: string = style({
  position: 'sticky',
  top: '0',
  width: 'auto',
  boxSizing: "border-box",
  background: BaseTheme.color.primary(),
  zIndex: Z_INDEX.HEADER,
  borderBottomRightRadius: BoxStyle.border.radius.extreme,
  borderBottomLeftRadius: BoxStyle.border.radius.extreme,
  boxShadow: BoxStyle.shadow.large,
  display: "flex",
  justifyContent:"center",
  alignItems: "center",
  '@media': {
    [BreakPoints.xxs.css]: {
     
     

    },
  }
});

const headerScrolled: string = style({
   
    height: '8vh',
    backgroundColor: BaseTheme.color.primary(),
  
  '@media': {
    [BreakPoints.xxs.css]: {
      height: "12vh",
    },
    [BreakPoints.xs.css]:{
          
      height:"10vh"

    },
    [HeightBreakPoints.short]:{
      height:"12vh",
    },
    [HeightBreakPoints.medium]:{
      height:"15vh",
   }

  }
});


const headerNotScrolled: string = style({
  height: '13vh',
  transition: 'height 0.5s ease-in-out', 
  '@media': {
    [BreakPoints.xxs.css]: {
      height: "15vh",
    },
    [BreakPoints.xs.css]:{
       
      height: "14vh",

    },
    [HeightBreakPoints.short]:{
      height:"30vh",
    },
    [HeightBreakPoints.medium]:{
       height:"25vh",
    }
  }
});


export const headerVriants = recipe(createScrollVariants({
  base: headerBase,
  scrolled: headerScrolled,
  notScrolled: headerNotScrolled,
}));


export const logoContainer = style({
  width: "15%",
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  transition: 'transform 0.4s ease-in-out, opacity 0.4s ease-in-out',
  '@media':{
  
    [BreakPoints.xs.css]:{
         
      width:"25%",
  

    },
    [BreakPoints.sm.css]:{
         
      width:"20%",
    

    },
    [BreakPoints.md.css]:{
         
  
     

    },
   

  }
});



export const searchContainer = style({
  display: "flex",
  width: "70%",
  position:"relative",
  alignItems:"right",
  justifyContent:"right",
  height: "100%",
  zIndex: Z_INDEX.search,
  transition: 'all 0.4s ease-in-out', 
  '@media':{
    
    [BreakPoints.xxs.css]:{
         
      width:"70%", //only search is there 
      justifyContent:"center",

    },
    [BreakPoints.xs.css]:{
     justifyContent: "center",

      width:"60%", 
    

    },
    [BreakPoints.sm.css]:{
      width:"60%", 
      

    },
    [BreakPoints.md.css]:{
         
      width:"70%",


    },
   
  }

});


const baseSocialMedia= style({
  display: "flex", 
  flexDirection: "row",
  maxWidth: "100%",
  // marginLeft:"1rem",
  justifyContent:"start",
  boxSizing: "border-box", 
  width: "15%", 
  height: "100%",
  transition: 'all 0.4s ease-in-out',
  '@media':{
    
    [BreakPoints.xs.css]:{

      width:"20%",


    },
    [BreakPoints.sm.css]:{
  
    
      width:"20%",
    },
    [BreakPoints.md.css]:{
         
   
     
    },
   
   

     

  }
});

const scoialMediaOnSroll = style({
 
  alignItems: "center",

});


const scoialMediaNotSroll = style({
   
  alignItems:"start",
  marginTop:"1rem",
});

export const socialMediaVarient = recipe(createScrollVariants({
  base: baseSocialMedia,
  scrolled: scoialMediaOnSroll,
  notScrolled: scoialMediaNotSroll,
}));


export const toggleButtonWrapper=style({

  display:"flex",
  position:"absolute",
  alignItems:"start",
  zIndex:"-99",
  left:"1rem",
  top:"0.2rem",
  background:BaseTheme.color.none(),
  justifyContent:"start",

});


