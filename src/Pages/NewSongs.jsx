import React,{useState} from 'react';
import styles from './Mainpage.module.css';
import { Grid, Typography } from '@mui/material';
import Carousel from './Carousel';
import GridData from './GridData';

const NewSongs = ({newAlbum,title}) => {
    const [showAll, setShowAll] = useState(true);
    const handleShowAll =() =>{
        setShowAll(!showAll);
    }
  return (
    <div className={styles.mainStyle}>
      <div className={styles.mytitle}>
        <Typography variant="h6" sx={{ color: "white", fontWeight: "bold" }}>
          {title}
        </Typography>
        <Typography
          variant="h6"
          color="primary"
          sx={{ cursor: "pointer", marginBottom: "10px" }}
          onClick={handleShowAll}
        >
          {showAll ? `Show All` : `Collapse All`}
        </Typography>
      </div>

      {showAll ?<Carousel albums={newAlbum} />: <GridData albums={newAlbum} />}
    </div>
  );
}

export default NewSongs
