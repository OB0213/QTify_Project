import React from 'react';
import { Grid,Typography,Tabs,Tab,Box} from '@mui/material';
import styles from './Mainpage.module.css';
import { useEffect,useState } from 'react';
import axios from 'axios';
import Carousel from './Carousel';


const SongsData = ({songs}) => {
  console.log(songs);
  const [genre,setGenre]=useState(["All"]);
  const [data,setData]=useState([]);
  const [songsData,setSongsData]=useState([]);

   const [selectedTab, setSelectedTab] = useState(0);

   const handleChange = (event, newValue) => {
     setSelectedTab(newValue);
   };

   useEffect(()=>{
    setSongsData(songs);
   })
  
   const fetchData = async () => {
     let response = await axios.get(
       "https://qtify-backend-labs.crio.do/genres");
     setData(response.data.data);
     console.log("Data is:",response.data.data);
   
    
   };

   useEffect(() => {
     fetchData();
   }, []);
   console.log(JSON.stringify(genre));

   useEffect(()=>{
 for (let i = 0; i < data.length; i++) {
   setGenre((prev) => [...prev, data[i].label]);
 }
   },[])

   useEffect(()=>{
    if(selectedTab===0){
      setSongsData(songs);
    }
    else{
      const filteredSongs=songs.filter((item,index)=>item.genre.label===genre[selectedTab]);
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
        {genre.map((item, index) => (
          <Tab key={index} label={item} className={styles.tabTitles}/>
        ))}
      </Tabs>
      </Box>
      <Carousel albums={songsData} />
    </div>
  );
}

export default SongsData;
