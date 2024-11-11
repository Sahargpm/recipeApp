
import BaseContainer from "@/app/common-components/base-container/base-container";
import TextView from "@/app/common-components/text-view/text-view";
import * as styles from "@/app/components/footer/footer.css"
import { SocialLinks, ThemeValues, copyRight } from "@/app/utils/values";
import SocialMediaList from "@/app/common-components/scoial-media/social-media-list";



const Footer=()=>{

    return ( 
    
            <BaseContainer className={styles.wrapper}>
      
                 <TextView 
                 theme={ThemeValues.secondary}
                 wrapperClass={styles.aboutWrapper} 
                 message="About Us" viewType='heading'/>

                 <TextView 
                  theme={ThemeValues.secondary}
                  wrapperClass={styles.aboutStatment} 
                  message="This website is developed to  apply the knowledge and skills I’ve gained over the past five months in software development" 
                  viewType='paragraph'/>


                 <SocialMediaList 
                 wrapperClass={styles.socialMediaListWrapper}/>

                 <TextView 
                 theme={ThemeValues.secondary}
                  wrapperClass={styles.copyRightWrapper}
                  message={copyRight} viewType="copyRight"/>
                
            </BaseContainer>);


}


export default Footer;