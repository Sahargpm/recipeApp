import React, { memo, ReactNode } from "react";
import clsx from "clsx";
import { ButtonStyle, ButtonTypes } from "../../utils/types";
import * as styles from "@/app/common-components/button/button-style.css"; 
import TextView from "../text-view/text-view";
import { ThemeValues } from "@/app/utils/values";
import { BaseProps } from "@/app/utils/shared-types/shared-types"


interface ButtonProps extends Omit<BaseProps, 'loading'> {
    label?: string;
    type?: 'reset' | 'submit' | 'button';
    buttonStyle: ButtonStyle;
    buttonType: ButtonTypes;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    children?: ReactNode;
}

const Button = memo(({
    children,
    theme,
    wrapperClass,
    label,
    onClick,
    disabled = false,
    buttonStyle,
    buttonType,
    type = 'button',
}: ButtonProps) => {


    const themeStyles = {
     
        [ThemeValues.primary]: styles.buttonThemes.primary,
        [ThemeValues.secondary]: styles.buttonThemes.secondary,
        [ThemeValues.none]: styles.buttonThemes.none,
    };

    const buttonStyles:Record<ButtonStyle,string>= {
      round:styles.buttonStyles.round,
      standard:styles.buttonStyles.standard,
      
    };



        
    
    const throwError = (message: string) => {
        console.error(message);
        throw new Error(message);
    };


    if (buttonType === 'iconic' && !children) {
       
        throwError("Iconic button requires an icon but not provided");
    }
    if (buttonType === 'textual') {
        if (!label) {
            throwError("Label must be provided for textual button");
        }
        if (children) {
            throwError("Textual buttons cannot contain children like icons");
        }
    }
    if (buttonType ==='combo') {

        if (!children || !label) {
            throwError("Both icon and label must be provided for combo button");
        }
    }

    return (
       
        <button 
            type={type}
            className={clsx(wrapperClass,themeStyles[theme!],buttonStyles[buttonStyle])} 
            onClick={onClick}
            disabled={disabled}
            aria-disabled={disabled}
            tabIndex={disabled ? -1 : 0}
            >



            {buttonType ==='iconic' ? (
                children
            ) : (
                <div className={styles.wrapper}>
                    {children && children}
                    <TextView animation='none'  wrapperClass={buttonType==='combo'?styles.textWrapperWithIcon:''} theme={ThemeValues.secondary} viewType='button' message={label} />
                </div>
            )}


        </button>
    );
});

Button.displayName="MyButton";
export default Button;
