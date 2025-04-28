import { Typography } from '@mui/material'
import React from 'react';
import styles from './Button.module.css';

const Buttondata = ({text,functionData}) => {
  return (
    <div>
      <button className={styles.button}>
        <Typography color="primary" variant="button">{text}</Typography>
      </button>
    </div>
  )
}

export default Buttondata
