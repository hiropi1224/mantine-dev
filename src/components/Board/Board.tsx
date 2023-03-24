import React, { FC } from 'react';
import { Box, Group } from '@mantine/core';
import { calculateWinner } from '@/utils/calculateWinner';
import { Square } from '@/components/Square';

type Props = {
  xIsNext: boolean;
  squares: string[];
  onPlay: (squares: string[]) => void;
};

export const Board: FC<Props> = ({ xIsNext, squares, onPlay }) => {
  const handleClick = (i: number) => {
    if (squares[i] || calculateWinner(squares) !== null) return;
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }

    onPlay(nextSquares);
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner !== null) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <Box>
      <div>{status}</div>
      <Group sx={{ gap: '0px' }}>
        <Square value={squares[0]} handleClick={() => handleClick(0)} />
        <Square value={squares[1]} handleClick={() => handleClick(1)} />
        <Square value={squares[2]} handleClick={() => handleClick(2)} />
      </Group>
      <Group sx={{ gap: '0px' }}>
        <Square value={squares[3]} handleClick={() => handleClick(3)} />
        <Square value={squares[4]} handleClick={() => handleClick(4)} />
        <Square value={squares[5]} handleClick={() => handleClick(5)} />
      </Group>
      <Group sx={{ gap: '0px' }}>
        <Square value={squares[6]} handleClick={() => handleClick(6)} />
        <Square value={squares[7]} handleClick={() => handleClick(7)} />
        <Square value={squares[8]} handleClick={() => handleClick(8)} />
      </Group>
    </Box>
  );
};
