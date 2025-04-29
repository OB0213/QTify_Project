import React,{useState,useEffect} from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero';
import styles from './Mainpage.module.css';
import axios from 'axios'
import NewSongs from './NewSongs';
import Songs from './SongsData';
import SongsData from './SongsData';

const Mainpage = () => {
    const [topAlbum,setTopAlbum]=useState([]);
    const [newAlbum,setNewAlbum]=useState([]);
    const [songs,setSongs]=useState([]);
    const [genre, setGenre] = useState([]);
    const [data,setData]=useState([]);

   

    const fetchTopAlbum=async()=>{
        let response = await axios.get(
          "https://qtify-backend-labs.crio.do/albums/top"
        );

        setTopAlbum(response.data);
    }
    useEffect(()=>{
        fetchTopAlbum();
    },[]);

    const fetchNewAlbum=async()=>{
        let response = await axios.get(
          " https://qtify-backend-labs.crio.do/albums/new"
        );

        setNewAlbum(response.data);
    }

    useEffect(()=>{
        fetchNewAlbum();
    },[]);

    const fetchSongs=async()=>{
        let response = await axios.get(
          `https://qtify-backend-labs.crio.do/songs`
        );
        setSongs(response.data);
    }

    useEffect(()=>{
        fetchSongs();
    },[]);


     const fetchData = async () => {
         let response = await axios.get(
           "https://qtify-backend-labs.crio.do/genres");
         setData(response.data.data);
         console.log("Data is:",response.data.data);
       
        
       };
    
       useEffect(() => {
         fetchData();
         for(let i=0;i<data.length;i++){
          setGenre((prev)=>[...prev,data[i].label]);
         }
       }, []);
       console.log(JSON.stringify(genre));


    
   

   
    


    console.log(topAlbum);
    console.log(newAlbum);
    console.log(songs);
    console.log(genre);
  return (
    <div className={styles.container}>
    <Navbar />
    <Hero />
    <NewSongs title={"Top Albums"} newAlbum={topAlbum}/>
    <NewSongs title={"New Albums"} newAlbum={newAlbum}></NewSongs>
    <SongsData songs={songs} genre={genre}></SongsData>
   
    </div>
  )
}

export default Mainpage
