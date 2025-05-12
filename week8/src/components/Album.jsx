import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 40px 20px;
  background-color: #f9f9f9;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  max-width: 900px;
  margin: 0 auto;
`;

const AlbumItem = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`;

const images = [
  'img1.jpg', 'img2.jpg', 'img3.jpg',
  'img4.jpg', 'img5.jpg', 'img6.jpg',
  'img7.jpg', 'img8.jpg', 'img9.jpg'
];

function Album() {
  return (
    <Section>
      <h2>#My_Album</h2>
      <Grid>
        {images.map((img, idx) => (
          <AlbumItem key={idx} src={`assets/${img}`} alt={`Album ${idx + 1}`} />
        ))}
      </Grid>
    </Section>
  );
}

export default Album;
