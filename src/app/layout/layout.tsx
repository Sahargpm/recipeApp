'use client'
import BasicContainer from "../common-components/base-container/base-container";
import Item from "../components/Items/Item";
import Header from "../components/header/header";
import * as styles from "@/app/layout/layout.css"
import Recipe from "../components/recipe-detail/recipe";
import Footer from "../components/footer/footer";
import clsx from "clsx";

import Drawer from "../components/nav-drawer/nav-drawe";   
import Health from "../components/health/health";
import RootContextProvider from "../context/root-context";



 const AppLayout=()=>{

      return (
            
            
            <BasicContainer className={clsx(styles.wrapper)}>  

             <RootContextProvider> 
                <Header/> 
                <Item/> 
                <Recipe/>      
                <Drawer/>
             </RootContextProvider>
                <Health/>
                <Footer/>

             </BasicContainer>);
 }
      
    



 export default AppLayout;