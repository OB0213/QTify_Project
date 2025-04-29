import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Chip,
  Box,
} from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import styles from './Mainpage.module.css';

const Carousel = ({albums}) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={30}
      slidesPerView={5}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <Grid container spacing={2}>
        {albums.map((album, index) => (
          <SwiperSlide>
            <Grid
              item
              xs={6}
              sm={5}
              md={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                height: "300px",
              }}
            >
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
              <Typography className={styles.albumTitle}>
                {album.title}
              </Typography>
            </Grid>
          </SwiperSlide>
        ))}
      </Grid>
    </Swiper>
  );
}

export default Carousel
