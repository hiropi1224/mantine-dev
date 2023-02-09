import React, { FC } from 'react';
import { SimpleGrid, Text } from '@mantine/core';
type Props = {
  title: string;
  children: JSX.Element;
};

export const FormBase: FC<Props> = ({ title, children }) => {
  return (
    <SimpleGrid cols={2}>
      <div>
        <Text fw={500}>{title}</Text>
      </div>
      <div>{children}</div>
    </SimpleGrid>
  );
};
