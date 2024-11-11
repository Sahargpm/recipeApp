import { ReactNode } from "react";
import * as styles from "@/app/common-components/tag-container/tag-container-style.css";
import clsx from "clsx";
import BaseContainer from "../base-container/base-container";
import { ContainerType, Layout } from "@/app/utils/types";
import TextView from "../text-view/text-view";
import { ThemeValues } from "@/app/utils/values";

interface TagContainerProps {
  wrapperClass?: string;
  container: ContainerType;
  postion:'start'|'center',
  title: string;
  layout: Layout;
  children: ReactNode;
}

const containerStyles = {
  blog: {
    titleColor:ThemeValues.secondary,
    topBoder: styles.topBorderContainer.blog,
    title: styles.titleContainer.blog,
  },
  content: {
    titleColor:ThemeValues.primary,
    topBoder: styles.topBorderContainer.content,
    title: styles.titleContainer.content,
  },
};

const getContainerStyles = (containerType: ContainerType) => containerStyles[containerType];

const TagContainer = ({
  wrapperClass,
  container = 'content',
  title,
  children,
  layout,
  postion='start',
}: TagContainerProps) => {
  const cntinrStyle = getContainerStyles(container);

  return (
    <BaseContainer className={clsx(wrapperClass, styles.baseContainer)}>
      <div className={clsx(cntinrStyle.topBoder)}>
        <div className={clsx(cntinrStyle.title)}>
          <TextView viewType={container=='content'?'content':'blog'} message={title} />
        </div>
      </div>

      <div
        className={clsx(
          styles.contentContainer,
          layout === 'H' ? styles.direction.row : styles.direction.column,postion=='start'?styles.contentPosition.start:styles.contentPosition.center
        )}
      >
        {children}
      </div>
    </BaseContainer>
  );
};

export default TagContainer;
