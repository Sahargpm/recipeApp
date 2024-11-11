import { BoxStyle } from "@/app/strings/box-styling";
import { BaseTheme } from "@/app/theme/theme";
import { style, keyframes } from "@vanilla-extract/css";

const focusAnimation = keyframes({
    "0%": {
        borderColor: BaseTheme.color.primary(), 
        boxShadow: "none",
    },
    "100%": {
        borderColor:BaseTheme.color.accent(), 
    },
});

const baseInput = style({
    display: "block",
    paddingLeft: "2%",
    width: "70%",
    position:"relative",
    borderStyle: BaseTheme.box.border.style.solid,
    borderWidth: BaseTheme.box.border.width.standard,
    boxShadow:BaseTheme.box.shadow.medium,
    fontSize:BaseTheme.box.font.size.small,
    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
    outline: "none",
    ":focus": {
        animation: `${focusAnimation} 0.2s ease-in-out`,
    },
});


const rounderCorner = style([
    baseInput,
    { 
        borderRadius: BaseTheme.box.border.radius.basic,
        borderColor: BaseTheme.color.primary(), 
        color:BaseTheme.color.textPrimary(), 
        backgroundColor:BaseTheme.color.secondary(),
    },
]);

const leftRoundCorner = style([
    baseInput,
    {
        borderTopLeftRadius: BaseTheme.box.border.radius.standard,
        borderBottomLeftRadius: BaseTheme.box.border.radius.standard,
        borderColor:BaseTheme.color.secondary(), 
        backgroundColor: BaseTheme.color.textSecondary(), 
    },
]);


const rightRoundCorner = style([
    baseInput,
    {
        borderTopRightRadius: BoxStyle.border.radius.standard,
        borderBottomRightRadius: BoxStyle.border.radius.standard,
        borderColor: BaseTheme.color.secondary(), 
        color: BaseTheme.color.textPrimary(), 
        backgroundColor: BaseTheme.color.textSecondary(), 
    },
]);


const standard = style([
    baseInput,
    {
        borderColor: BaseTheme.color.secondary(),
        color: BaseTheme.color.textPrimary(), 
        backgroundColor: BaseTheme.color.textSecondary(), 
    },
]);


export const InputStyle = {

    rounderCorners: rounderCorner,
    leftRoundCorner: leftRoundCorner,
    rightRoundCorner: rightRoundCorner,
    standard: standard,
};
