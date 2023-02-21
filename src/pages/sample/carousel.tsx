import { Container } from '@mantine/core';
import { NextPage } from 'next';
import { CustomCarousel } from '@/components/Carousel';

export const Home: NextPage = () => {
  return (
    <Container style={{ height: '100vh' }}>
      <CustomCarousel />
    </Container>
  );
};

export default Home;
