"use client";
import * as styles from "@/app/components/header/header.css";
import { getScrollVariant } from "@/app/utils/operations/scroll-varient";
import useScroll from "@/app/custom-hooks/useScroll";
import { SCROLL_CONFIG, ThemeValues } from "@/app/utils/values";
import BaseContainer from "@/app/common-components/base-container/base-container";
import { useBreakpoint } from "@/app/custom-hooks/use-break-point";
import { BreakPoints } from "@/app/strings/break-points";
import { useEffect, useState } from "react";
import Search from "./search/search";
import Button from "@/app/common-components/button/button";
import MyIcon from "@/app/common-components/Icon/my-icon";
import Logo from "./logo/logo";
import { BaseTheme } from "@/app/theme/theme";
import { useRootContext } from "@/app/custom-hooks/use-rootContext";
import SocialMediaList from "@/app/common-components/scoial-media/social-media-list";

const Header = () => {
  const { drawer, setDrawer } = useRootContext();
  const [isMounted, setIsMounted] = useState(false);
  const isScroll = getScrollVariant(useScroll(SCROLL_CONFIG.SCROLL_POINT));
  const isbreakPoint = useBreakpoint() == BreakPoints.xxs.screen;

  const handleBtnClick = () => {
    setDrawer && setDrawer(true);
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);


  useEffect(() => {
    if (isMounted && !isbreakPoint) {
      setDrawer && setDrawer(false);
    }
  }, [isbreakPoint, isMounted, setDrawer]);




  if (!isMounted) {
    return null;
  }

  return (
    <BaseContainer className={styles.headerVriants({ isScroll })}>
      {isbreakPoint ? (
        <>
          <Search wrapperClass={styles.searchContainer} />
          <Button
            onClick={handleBtnClick}
            wrapperClass={styles.toggleButtonWrapper}
            buttonType="iconic"
            buttonStyle='round'
          >
            <MyIcon theme={ThemeValues.secondary} size={30} title="toggle" />
          </Button>
        </>
      ) : (
        <>
          <Logo wrapperClass={styles.logoContainer} />
          <Search wrapperClass={styles.searchContainer} />
          <SocialMediaList align="start" wrapperClass={styles.socialMediaVarient({ isScroll })}/>
        </>
      )}
    </BaseContainer>
  );
};

export default Header;
