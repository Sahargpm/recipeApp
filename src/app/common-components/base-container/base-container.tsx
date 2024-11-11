import React, { forwardRef } from "react";
import * as styles from "@/app/common-components/base-container/base-container.css";
import clsx from "clsx";

interface BaseContainerProps {
  id?: string;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

const BaseContainer = forwardRef<HTMLDivElement, BaseContainerProps>(
  ({ id, children, className, onClick, style }, ref) => {
    return (
      <div
        id={id}
        ref={ref} 
        className={clsx(className, styles.wrapper)} 
        onClick={onClick}
        style={style}
      >
        {children}
      </div>
    );
  }
);

BaseContainer.displayName = "BaseContainer";

export default BaseContainer;
