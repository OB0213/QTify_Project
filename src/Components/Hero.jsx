import React from 'react';
import styles from './Hero.module.css';
import {Typography,Box} from '@mui/material';
import HeroImage from '../assets/vibrating-headphone 1.png';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <Box className={styles.heroContent}>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </Box>
      <Box>
        <img src={HeroImage} height={212}></img>
      </Box>
    </div>
  );
}

export default Hero
