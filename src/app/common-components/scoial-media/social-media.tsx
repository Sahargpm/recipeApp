// components/SocialIcon.tsx
import React from 'react';
import { SocialMediaThem, SocialPlatform} from '../../utils/types';
import * as styles from "@/app/common-components/scoial-media/social-media.css"
import clsx from 'clsx';
import BaseContainer from '../base-container/base-container';
import Icon from './socia-icons';
import { BaseTheme } from '@/app/theme/theme';
import { SociaSocialMediaListProps } from './social-media-list';
import { omit } from 'lodash';


interface SocialMediaPlatformProps extends SociaSocialMediaListProps{
  
  platform: SocialPlatform;
  url?: string;
  title?:boolean;
 
 

}
const SocialMediaPlatform = ({ platform, url,title,iconSize = 24, wrapperClass,theme,align='center'}: SocialMediaPlatformProps) => {
 
 
  return (
    

    <BaseContainer className={clsx(wrapperClass)}> 
    
    <li className={clsx(styles.sociaListWraper,align=='center'?styles.socilaMediaIconePostion.center:styles.socilaMediaIconePostion.start)}> 
     <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ display: 'flex', alignItems: 'center'}}
      title={platform} 
      aria-label={platform}
     >
    

      <span  style={{ width: iconSize, height: iconSize,marginRight:"0.4rem" }}>
       
        <Icon  className={styles.iconOnHover} platform={platform} size={iconSize} fill={theme==='secondary'?BaseTheme.color.primary():BaseTheme.color.secondary()} ></Icon>
      
      </span>
       
      {title && <span>{platform}</span>}
     
    </a>   
    </li>


    </BaseContainer> 

  );
};

export default SocialMediaPlatform;
