import BaseContainer from "@/app/common-components/base-container/base-container";
import TextView from "@/app/common-components/text-view/text-view";
import * as styles from "@/app/components/recipe-detail/reciep-tags/recipe-tag.css";
import MyIcon from "@/app/common-components/Icon/my-icon";
import { ThemeValues } from "@/app/utils/values";
import SkeletonLoader from "@/app/common-components/loading/loading";
import { BaseProps } from "@/app/utils/shared-types/shared-types";

interface TagsProps extends BaseProps {
    icon?: string;
    title?: string;
}

const Tags = ({ icon, wrapperClass, title, loading }: TagsProps) => {
    return (
        <BaseContainer className={wrapperClass}>
            
            {loading===true? (
                <SkeletonLoader height="100%" width="200px" borderRadius="2rem"/>
            ) : (
                <>
                    <MyIcon 
                        wrapperClass={styles.iconContainer} 
                        theme={ThemeValues.primary} 
                        title={icon!} 
                        size={40}
                    />
                    <TextView  
                        wrapperClass={styles.titleContainer} 
                        message={title as string} 
                        viewType="button" 
                    />
                </>
            )}
        </BaseContainer>
    );
};

export default Tags;
