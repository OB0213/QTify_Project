import React from 'react';
import {Grid,Card,CardContent,Typography,CardMedia, Chip,Box} from '@mui/material';
import styles from './Mainpage.module.css'

const GridData = ({albums}) => {
  return (
    <Grid container spacing={2} >
      {albums.map((album, index) => (
        <Grid item xs={6} sm={5} md={2} sx={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",height:"300px"}}>
          <Card
            elevation={4}
            sx={{
              height: "200",
            }}
          >
            <CardMedia component="img" height="200" image={album.image} />
            <CardContent sx={{ height: "50px" }}>
              <Chip
                label={`${album.follows} follows`}
                sx={{ color: "white", backgroundColor: "black" }}
              ></Chip>
            </CardContent>
            
          </Card>
          <Typography className={styles.albumTitle}>{album.title}</Typography>
        </Grid>
      ))}
    </Grid>
  );
}

export default GridData
