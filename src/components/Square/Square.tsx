import React, { FC } from 'react';
import { Box } from '@mantine/core';
type Props = {
  value: string | null;
  handleClick: () => void;
};

export const Square: FC<Props> = ({ value, handleClick }) => {
  return (
    <Box
      w='3rem'
      h='3rem'
      sx={(theme) => ({
        color: theme.colors.dark[7],
        border: '1px solid',
        textAlign: 'center',
      })}
      onClick={handleClick}
    >
      {value}
    </Box>
  );
};
