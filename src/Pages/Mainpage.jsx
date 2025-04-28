import React,{useState,useEffect} from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero';
import styles from './Mainpage.module.css';
import axios from 'axios'
import NewSongs from './NewSongs';

const Mainpage = () => {
    const [topAlbum,setTopAlbum]=useState([]);
    const [newAlbum,setNewAlbum]=useState([]);
    

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
    },[])

    console.log(topAlbum);
    console.log(newAlbum)
  return (
    <div className={styles.container}>
    <Navbar />
    <Hero />
    <NewSongs title={"Top Albums"} newAlbum={topAlbum}/>
    <NewSongs title={"New Albums"} newAlbum={newAlbum}></NewSongs>
    </div>
  )
}

export default Mainpage
