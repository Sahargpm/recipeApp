import { useState, useRef } from "react";
import Button from "@/app/common-components/button/button";
import BaseContainer from "@/app/common-components/base-container/base-container";
import Input from "@/app/common-components/input/input";
import * as styles from "@/app/components/header/search/search.css";
import useScroll from "@/app/custom-hooks/useScroll";
import { getScrollVariant } from "@/app/utils/operations/scroll-varient";
import { SCROLL_CONFIG, ThemeValues } from "@/app/utils/values";
import { clsx } from "clsx";
import { useRootContext } from "@/app/custom-hooks/use-rootContext";
import MyIcon from "@/app/common-components/Icon/my-icon";

interface SearchProps {
  wrapperClass?: string;
}

const Search = ({ wrapperClass }: SearchProps) => {
 
   
  const [value, setValue] = useState('');
  const [error, setEror] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [placeholder, setPlaceholder] = useState('Type Dish Name...!');

  const inputRef = useRef<HTMLInputElement>(null);

  const scrollState = useScroll(SCROLL_CONFIG.SCROLL_POINT);
  const scrollVariant = getScrollVariant(scrollState);
  const { handleSearch } = useRootContext();

  const handleEror = () => {
      
   setEror("Enter Any Name First");
         
    
  };

  const handleClear = () => {
      
   
    setValue(''); 

    if (handleSearch) {
      handleSearch('');
    }

    if (inputRef.current) {
      inputRef.current.focus();
    }
    setEror('');
    setIsFocused(true);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    if (handleSearch) {

    
      handleSearch(newValue);


    }
  };

  const handleFocus = () => {
    setEror('');
    setIsFocused(true); 

  };

  const handleBlur = () => {
    if (!value) {
      setIsFocused(false); 
      setPlaceholder('Type Dish Name...!');
    }
  };

  return (
    <BaseContainer className={clsx(wrapperClass)}>
      <BaseContainer className={styles.wrapper}>
        <Input
          ref={inputRef} 
          wrapperClass={clsx(styles.wrapperVariants({ isScroll: scrollVariant }), styles.input)}
          value={value}
          name="Search"
          type="text"
          error={error}
          placeholder={placeholder}
          onChange={handleInput}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
     
        {!isFocused ? (
          <Button
            onClick={handleEror}
            theme={ThemeValues.primary}
            buttonStyle="standard"
            buttonType="textual"
            wrapperClass={clsx(styles.wrapperVariants({ isScroll: scrollVariant }), styles.searchBtn)}
            label="Search"
          />
        ) : (

          <Button
            onClick={handleClear}
            wrapperClass={clsx(styles.wrapperVariants({ isScroll: scrollVariant }), styles.searchBtn)}
            type="button"
            label="Clear"
            theme={ThemeValues.none}
            buttonStyle='round'
            buttonType='iconic'
          >
            <MyIcon wrapperClass="" size={20} theme={ThemeValues.primary} title="cancel"></MyIcon>
          </Button>
        )}
      </BaseContainer>
    </BaseContainer>
  );
};

export default Search;
