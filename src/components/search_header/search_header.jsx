import React, { memo, useRef } from "react";
import styles from "./search_header.module.css";

const SearchHeader = memo(({ onSerach }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    onSerach(value);
  };

  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
    return;
  };
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.logoimg} src="./images/logo.png" alt="logo" />
        <h1 className={styles.title}>Yeoptube</h1>
      </div>
      <input
        ref={inputRef}
        className={styles.input}
        type="search"
        placeholder="Search.."
        onKeyPress={onKeyPress}
      />
      <button className={styles.btn} type="submit" onClick={onClick}>
        <img className={styles.btnimg} src="images/search.png" alt="search" />
      </button>
    </header>
  );
});

export default SearchHeader;
