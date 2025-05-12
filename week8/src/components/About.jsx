import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick'; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Section = styled.section`
  padding: 60px 20px;
  text-align: center;
`;

const MusicSection = styled.div`
  padding: 40px 20px;
  background-color: #f5f5f5;
`;

const MovieSection = styled.div`
  padding: 40px 20px;
  background-color:rgba(211, 209, 209, 0.9);
`;


const MainTitle = styled.h2`
  font-size: 32px;
  margin-bottom: 40px;
`;

const SubTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 20px;
  margin-top: 80px;
`;

// music
const MusicCover = styled.img`
  width: 400px;
  height: 400px;
  object-fit: cover;
  border-radius: 10px;
  margin: 0 auto;
`;

const MusicTitle = styled.p`
  font-size: 18px;
  margin-top: 10px;
`;

// movie
const MovieCover = styled.img`
  width: 400px;
  height: 550px;
  object-fit: cover;
  border-radius: 10px;
  margin: 0 auto;
`;

const MovieTitle = styled.p`
  font-size: 18px;
  margin-top: 10px;
`;

// list
const musicList = [
  { title: "닿는 순간 - 창모(Changmo)", image: "/assets/music1.jpg" },
  { title: "K-Flip+ - 식케이(Sik-k)", image: "/assets/music2.jpg" },
  { title: "EVERYTHING YOU WANTED - Jay Park", image: "/assets/music3.jpg" },
  { title: "2 4 : 2 6 - Beenzino", image: "/assets/music4.jpg" },
  { title: "Voicenotes - Charlie Puth", image: "/assets/music5.jpg" }
];

const movieList = [
    { title: "Interstellar", image: "/assets/movie1.jpg" },
    { title: "GOOD WILL HUNTING", image: "/assets/movie2.jpg" },
    { title: "어벤져스 엔드게임", image: "/assets/movie3.jpg" },
    { title: "트루먼쇼", image: "/assets/movie4.jpg" },
    { title: "조커", image: "/assets/movie5.jpg" }
  ];

function About() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
<Section>
    <MusicSection>
      <MainTitle>About Me</MainTitle>

      <SubTitle>🎵 Music</SubTitle>
      <Slider {...settings}>
        {musicList.map((music, index) => (
          <div key={index}>
            <MusicCover src={music.image} alt={music.title} />
            <MusicTitle>{music.title}</MusicTitle>
          </div>
        ))}
      </Slider>
    </MusicSection>

    <MovieSection>
      <SubTitle>🍿 Movie</SubTitle>
      <Slider {...settings}>
        {movieList.map((movie, index) => (
          <div key={index}>
            <MovieCover src={movie.image} alt={movie.title} />
            <MovieTitle>{movie.title}</MovieTitle>
          </div>
        ))}
      </Slider>
    </MovieSection>
</Section>   
  );
}

export default About;
