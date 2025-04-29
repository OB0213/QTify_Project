import React from 'react';
import { Grid,Typography,Tabs,Tab,Box} from '@mui/material';
import styles from './Mainpage.module.css';
import { useEffect,useState } from 'react';
import axios from 'axios';
import Carousel from './Carousel';


const SongsData = ({songs,genre}) => {
  console.log(songs);
  const [genreData,setGenreData]=useState([]);
  const [data,setData]=useState([]);
  const [songsData,setSongsData]=useState([]);

   const [selectedTab, setSelectedTab] = useState(0);

   const handleChange = (event, newValue) => {
     setSelectedTab(newValue);
   };

   useEffect(()=>{
    setSongsData(songs);
   })
  
  

   useEffect(()=>{

   setGenreData([...genre,"All"]);
 }
,[]);

console.log(genreData);

   useEffect(()=>{
    if(selectedTab===genreData.length-1){
      setSongsData(songs);
    }
    else{
      const filteredSongs=songs.filter((item,index)=>item.genre.label===genreData[selectedTab]);
      setSongsData(filteredSongs);
    }


   },[songs,selectedTab])
    
    
   
  return (
  
     <div className={styles.mainStyle}>
          <div className={styles.mytitle}>
            <Typography variant="h6" sx={{ color: "white", fontWeight: "bold" }}>
              Songs
            </Typography>
            </div>
    <Box sx={{ width: '100%' }}>
      {/* Tabs */}
      <Tabs value={selectedTab} onChange={handleChange}>
        {genreData.map((item, index) => (
          <Tab key={index} label={item} className={styles.tabTitles}/>
        ))}
      </Tabs>
      </Box>
      <Carousel albums={songsData} />
    </div>
  );
}

export default SongsData;
