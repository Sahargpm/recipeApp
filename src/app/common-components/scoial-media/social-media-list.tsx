import { SocialLinks } from "@/app/utils/values";
import SocialMediaPlatform from "./social-media";
import { BaseThemeTypes, SocialPlatform } from "@/app/utils/types";

export interface SociaSocialMediaListProps{

 wrapperClass:string;
 iconSize?:number,  
 iconeWrapper?:string,
 theme?:BaseThemeTypes,
 align?:'start'|'center',

}


const SocialMediaList=({wrapperClass,iconSize,theme="primary",align="center",iconeWrapper}:SociaSocialMediaListProps)=>{

    
   return( <ul className={wrapperClass}>
            {Object.entries(SocialLinks).map(([platform, value]) => (
              <SocialMediaPlatform
                wrapperClass={iconeWrapper!}
                theme={theme}
                align={align}
                iconSize={iconSize}
                key={platform}
                platform={platform as SocialPlatform}
                url={value}
              />
            ))}
          </ul>
   );


}

export default SocialMediaList;