import { TextStyles } from "./text-view-style.css";
import BaseContainer from "../base-container/base-container";
import clsx from "clsx";
import { ThemeValues } from "@/app/utils/values";
import { renderTextView } from "./text-view-styles";
import { BaseThemeTypes, TextAnimation, ViewType } from "@/app/utils/types";

interface TextViewProps {
  wrapperClass?: string; 
  message?: string;
  animation?:TextAnimation;
  theme?:BaseThemeTypes,
  viewType?: ViewType;
  children?: React.ReactNode; 
}

const TextView = ({
  wrapperClass = '', 
  message = '', 
  animation='shake',
  theme="primary",
  viewType = 'heading', 
  children
}: TextViewProps) => {
  

  return wrapperClass ? (
    <div className={clsx(wrapperClass)}>
      {renderTextView(viewType,message,theme,animation)}
    </div>
  ) : (
    renderTextView(viewType,message,theme,animation)
  );
};

export default TextView;
