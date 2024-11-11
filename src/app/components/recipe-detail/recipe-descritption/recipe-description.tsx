import BaseContainer from "@/app/common-components/base-container/base-container";
import SkeletonLoader from "@/app/common-components/loading/loading";
import TextView from "@/app/common-components/text-view/text-view";
import * as styles from "@/app/components/recipe-detail/recipe-descritption/recipe-description.css"
import { BaseProps } from "@/app/utils/shared-types/shared-types";

import { ThemeValues } from "@/app/utils/values";

interface RecipeDescriptionProps extends BaseProps {
    wrapperClass: string;
    point: number;
    description: string;

}

const RecipeDescription = ({ wrapperClass, point, description, loading }: RecipeDescriptionProps) => {
    return (
        <BaseContainer className={styles.wrapper}>
            {loading ? (
              <>
                    <SkeletonLoader wrapper={styles.stepContainer} />
                    <SkeletonLoader wrapper={styles.connectContainer} />
                    <SkeletonLoader wrapper={styles.descriptionContainer} height="4rem"/> 
                </>
            ) : (
                <>
                    <BaseContainer className={styles.stepContainer}>
                        <TextView wrapperClass={styles.step} theme={ThemeValues.secondary} message={point.toString()} viewType="paragraph" />
                        <span className={styles.connectContainer2}></span>
                    </BaseContainer>

                    <BaseContainer className={styles.connectContainer} />

                    <BaseContainer className={styles.descriptionContainer}>
                        <TextView theme={ThemeValues.primary} message={description} viewType="paragraph" />
                    </BaseContainer>
                </>
            )}
        </BaseContainer>
    );
};

export default RecipeDescription;
