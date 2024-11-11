import { SocialPlatform } from "@/app/utils/types";
import useScroll from "@/app/custom-hooks/useScroll";
import { SCROLL_CONFIG } from "@/app/utils/values";

interface SocialIconProps
{

    platform: SocialPlatform,
    size?: number,
    fill: string,
    className?:string;
}



const SocialIcon = ({ platform, size, fill,className}:SocialIconProps ) => {
    
       
    
    const icons: Record<string, JSX.Element> = {
      facebook: (
        <svg className={className}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={fill} width={size} height={size}>
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.83 7.94 9.78v-6.91H8.1v-2.87h1.84V9.41c0-1.82 1.08-2.83 2.73-2.83.79 0 1.62.14 1.62.14v1.78h-.91c-.9 0-1.18.56-1.18 1.14v1.38h2.01l-.32 2.87h-1.69v6.91C18.56 20.83 22 16.84 22 12z" />
        </svg>
      ),
      twitter: (
        <svg className={className}   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={fill} width={size} height={size}>
          <path d="M23.634 4.971a9.634 9.634 0 0 1-2.827.776 4.95 4.95 0 0 0 2.165-2.724 9.765 9.765 0 0 1-3.127 1.209 4.93 4.93 0 0 0-8.447 4.489A13.985 13.985 0 0 1 1.671 3.149a4.89 4.89 0 0 0 1.523 6.574 4.924 4.924 0 0 1-2.231-.614v.061a4.938 4.938 0 0 0 3.955 4.833 4.961 4.961 0 0 1-2.224.085 4.932 4.932 0 0 0 4.6 3.416 9.89 9.89 0 0 1-6.112 2.106c-.397 0-.79-.023-1.175-.068a13.97 13.97 0 0 0 7.557 2.212c9.058 0 14.01-7.509 14.01-14.021 0-.213-.005-.427-.015-.64A9.936 9.936 0 0 0 24 4.557a9.867 9.867 0 0 1-2.366.414z" />
        </svg>
      ),
      instagram: (
        <svg className={className}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={fill} width={size} height={size}>
          <path d="M12 0c-6.627 0-12 5.373-12 12 0 6.627 5.373 12 12 12 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12zm0 22.5c-5.738 0-10.5-4.762-10.5-10.5S6.262 1.5 12 1.5 22.5 6.262 22.5 12 17.738 22.5 12 22.5zm3-15c-.962 0-1.743.78-1.743 1.743S14.038 10 15 10s1.743-.78 1.743-1.743S15.962 7.5 15 7.5zm-3 1.5c-1.615 0-2.943 1.328-2.943 2.943S10.385 14 12 14s2.943-1.328 2.943-2.943S13.615 9 12 9zm4.5 11.625c-1.4.6-2.73.875-4.5.875s-3.1-.275-4.5-.875c-.45-.2-.875-.475-1.25-.875-.375-.375-.675-.8-.875-1.25-.6-1.4-.875-2.73-.875-4.5s.275-3.1.875-4.5c.2-.45.475-.875.875-1.25.375-.375.8-.675 1.25-.875 1.4-.6 2.73-.875 4.5-.875s3.1.275 4.5.875c.45.2.875.475 1.25.875.375.375.675.8.875 1.25.6 1.4.875 2.73.875 4.5s-.275 3.1-.875 4.5c-.2.45-.475.875-.875 1.25-.375.375-.8.675-1.25.875z" />
        </svg>
      ),
    };
  
    return icons[platform] || null;
  };


  export default SocialIcon;