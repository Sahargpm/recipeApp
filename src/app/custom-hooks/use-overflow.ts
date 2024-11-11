import { useEffect, useState } from "react";


const useOverflow = (ref: React.RefObject<HTMLDivElement>, children: React.ReactNode) => {
    const [isOverflow, setIsOverflow] = useState(false); 

    useEffect(() => {
        const checkOverflow = () => {
            if (ref.current) {
          
                const hasOverflow = ref.current.scrollWidth > ref.current.clientWidth;
                setIsOverflow(hasOverflow);
            }
        };

        checkOverflow(); 

    
        window.addEventListener('resize', checkOverflow);
        
 
        return () => window.removeEventListener('resize', checkOverflow);
    }, [ref, children]); 

    return isOverflow; 
};

export default useOverflow;
