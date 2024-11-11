import Image from "next/image";
import BaseContainer from "../base-container/base-container";
import * as styles from "@/app/common-components/blog/blog.css" 
import TextView from "../text-view/text-view";
import Article from "@/app/models/article/article";
import clsx from "clsx";
import { Position } from "@/app/utils/types";
import { BaseProps } from "@/app/utils/shared-types/shared-types";



interface BlogsProps extends BaseProps { 
  
  blog:Article;
  posterPostion:Position;  
  
}

const Blogs = ({ blog,posterPostion,wrapperClass}: BlogsProps) => {
           
 const posterAlignment=posterPostion=='left'?styles.postetPositionRight:styles.postetPositionLeft;
           
  return (

    <BaseContainer className={clsx(wrapperClass,styles.wrapper)}>

        <img
           src={blog.poster}
           className={clsx(posterAlignment)}
           alt="Logo"/>


       <TextView wrapperClass={styles.articleWrapper} viewType="paragraph" message={blog.article!} />
  
      </BaseContainer>
 

  
  );
};

export default Blogs;
