
import { BaseTheme } from "@/app/theme/theme";
import { style } from "@vanilla-extract/css";

export const wrapper=style({

    height:"30vh",
    width:"100%",
    position:"relative",
    display:"flex",
    backgroundColor:BaseTheme.color.primary(),
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    alignContent:"center",
})

export const aboutStatment=style({ 
 alignItems:"center",
 display:"flex",
 justifyContent:"center",
 height:"40%",
 width:"100%",
});

export const aboutWrapper=style({  
    alignItems:"center",
    display:"flex",
    justifyContent:"center",
    height:"20%",
    width:"100%",
   });
   
export const copyRightWrapper=style({
 
       display:"flex",
       height:"20%",
       marginBottom:"0.6rem",
       alignItems:"end",
       justifyContent:"end",
     

});

export const socialMediaListWrapper=style({
    display:"flex",
    height:"20%",
    flexDirection:"row",
  
});

