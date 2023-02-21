import React, { FC } from 'react';
import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';

const images = [
  'https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3',
  'https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3',
  'https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3',
  'https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3',
];

export const CustomCarousel: FC = () => {
  const slides = images.map((url) => (
    <Carousel.Slide key={url}>
      <Image src={url} alt='img' />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      sx={{ maxWidth: 320 }}
      slideGap='sm'
      controlSize={25}
      loop
      withIndicators
      mx='auto'
    >
      {slides}
    </Carousel>
  );
};
