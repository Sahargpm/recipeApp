import { ThemeValues } from "@/app/utils/values";
import MyIcon from "../Icon/my-icon";
import BaseContainer from "../base-container/base-container";
import Button from "../button/button";
import * as styles from '@/app/common-components/scroll-container/scroll-container.css';
import { BaseProps } from "@/app/utils/shared-types/shared-types";
import { ReactNode, useRef } from "react";
import useOverflow from "@/app/custom-hooks/use-overflow";


interface ScrollContainerProps extends BaseProps {
    
    children: ReactNode; 
}

const ScrollContainer = ({ children, wrapperClass }: ScrollContainerProps) => {
    const contentRef = useRef<HTMLDivElement>(null); 
    const isScroll = useOverflow(contentRef, children); 

    const scrollRight = () => {
        if (contentRef.current) {
            contentRef.current.scrollBy({
                left: 300,
                behavior: 'smooth'
            });
        }
    };

    const scrollLeft = () => {
        if (contentRef.current) {
            contentRef.current.scrollBy({
                left: -300,
                behavior: 'smooth'
            });
        }
    };

    return (
        <BaseContainer className={`${styles.wrapper} ${wrapperClass}`}>
            {isScroll && (
                <Button
                    theme={ThemeValues.none}
                    wrapperClass={styles.wrapperrightButton}
                    buttonStyle="round"
                    buttonType="iconic"
                    onClick={scrollRight}
                >
                    <MyIcon title="left" wrapperClass="" size={20} theme={ThemeValues.primary} />
                </Button>
            )}

            <BaseContainer className={styles.wrapperContent} ref={contentRef}>
                {children}
            </BaseContainer>

            {isScroll && (
                <Button
    
                    theme={ThemeValues.none}
                    wrapperClass={styles.wrapperleftButton}
                    buttonStyle='round'
                    buttonType="iconic"
                    onClick={scrollLeft}
                >
                    <MyIcon title="right" wrapperClass="" size={20} theme={ThemeValues.primary} />
                </Button>
            )}
        </BaseContainer>
    );
}

export default ScrollContainer;
