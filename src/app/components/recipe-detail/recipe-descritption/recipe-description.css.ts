import { BoxStyle } from "@/app/strings/box-styling";
import { BaseTheme } from "@/app/theme/theme";
import { style } from "@vanilla-extract/css";


export const wrapper=style({

    display:"flex",
    marginTop:"2rem",
    position:"relative",
    alignItems:"center",
    flexDirection:"row",
    zIndex:"1",
    width:"100%",

});


export const step=style({

    height:"2rem",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    width:"2rem",
  
  });

export const stepContainer=style({

  position:"relative",
  zIndex:"1",   
  borderRadius: "50%",  
  display: "flex",       
  justifyContent: "center", 
  alignItems: "center",    
  backgroundColor:BaseTheme.color.primary(),      
  textAlign: "center",  

});

export const connectContainer=style({

    height:"0.8rem",
    opacity:"1",
    position:"relative",
    borderRadius:"1%",
    backgroundColor:BaseTheme.color.primary(),
    width:"5%",
    zIndex:"5",

});


export const connectContainer2=style({

    height:"0.8rem",
    opacity:"1",
    position:"absolute",
    borderRadius:"1%",
    display:"flex",
    left:"0.1rem",
    flexDirection:"row",
    backgroundColor:BaseTheme.color.primary(),
    width:"100%",
    zIndex:"-1",

});
export const descriptionContainer=style({


    padding:"0.8rem",
    position:"relative",
    display:"flex",
    textAlign:"start",
    alignItems:"start",
    justifyContent:"start",
    alignContent:"start",
    borderRadius:"1rem",
    boxShadow:BaseTheme.box.shadow.equalSides,
    backgroundColor:BaseTheme.color.secondary(0.5),
    width:"100%",
    zIndex:"4",
    ':hover':{

        backgroundColor:BaseTheme.color.secondary(),


    }
    
    

}); 