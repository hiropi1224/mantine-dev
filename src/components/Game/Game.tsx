import React, { FC, useState } from 'react';
import { Group, Center, List } from '@mantine/core';
import { Board } from '@/components/Board';

export const Game: FC = () => {
  const [history, setHistory] = useState([Array<string>(9).fill('')]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares: string[]) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }
  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((_squares, move) => {
    let description: string;
    if (move > 0) {
      description = `Go to move #${move}`;
    } else {
      description = `Go to game start`;
    }

    return (
      <List.Item key={move} onClick={() => jumpTo(move)}>
        {description}
      </List.Item>
    );
  });

  return (
    <Center>
      <Group>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        <List>{moves}</List>
      </Group>
    </Center>
  );
};
