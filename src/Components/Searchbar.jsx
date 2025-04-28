import React from 'react';
import styles from './Searchbar.module.css';
import SearchIcon from "@mui/icons-material/Search";

const Searchbar = ({placeholder}) => {
  return (
    <div style={{position:'relative'}}>
      <form className={styles.wrapper}>
        <input type='text' placeholder={placeholder} className={styles.search}></input>
        <button className={styles.searchButton}>
           <SearchIcon /> 
        </button>
      </form>
    </div>
  )
}

export default Searchbar
