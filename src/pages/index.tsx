import { Container } from '@mantine/core';
import { NextPage } from 'next';
import { CustomForm } from '@/components/CustomForm';

export const Home: NextPage = () => {
  return (
    <Container style={{ height: '100vh' }}>
      <CustomForm />
    </Container>
  );
};

export default Home;
