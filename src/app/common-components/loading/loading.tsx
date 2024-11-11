import * as styles from "@/app/common-components/loading/loading.css"
import clsx from "clsx"


interface LoadingProps
{
 
  loadingStyle?:'circle'|'shimmer' 
  wrapper?:string;
  width?:string,
  height?:string,
  borderRadius?:string,
  background?:string,
  
   

}



const Loading = ({loadingStyle='shimmer',wrapper,width,height,borderRadius,background}:LoadingProps) => {
    
        if(loadingStyle==='circle')
          {

            return(
              <div className={styles.loaderContainer}>
              <div className={styles.spinner}>
                <div className={styles.spinnerInner}/>
              </div>
              <span className={styles.loaderTitle}>{"Loading..!!"}</span>
            </div>
              
            );

          }  

    return (
        
       
        
        <div className={clsx(styles.shimmer,wrapper)} style={{ width, height, borderRadius,backgroundColor:'transparent'}}></div> 

    );
 
};

  
  export default Loading;