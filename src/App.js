import { useEffect, useState } from 'react';
import BOARD from './utils/board';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Row from './components/Row';
import Cell from './components/Cell';
import { chkWinner } from './utils/checkWins';
import GameInfo from './components/GameInfo';

function App() {
  const [board, setBoard] = useState(BOARD);
  const [player, setPlayer] = useState(3);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    let winner = chkWinner(board);
    if (winner) {
      setGameOver(true);
    }
  }, [setGameOver, board])

  const getColor = (r, c) => {
    let color = 'white';
    switch (board[r][c]) {
      case 3:
        color = 'red';
        break;
      case 5:
        color = 'black';
        break;
      default:
        break;
    }
    return color;
  }

  return (
    <Box
      sx={{
        width: 800,
        height: 800,
        margin: 'auto',
        backgroundColor: 'gray'
      }}
    >
      <Container>
        {board.map((row, r) => (
          <Row key={r}>
            {row.map((_, c) => (
              <Cell
                key={`${r}${c}`}
                setBoard={setBoard}
                setPlayer={setPlayer}
                player={player}
                space={c}
                color={getColor(r, c)}
                gameOver={gameOver}
              />
            ))}
          </Row>
        ))}
      </Container>
      <GameInfo
        player={player}
        gameOver={gameOver}
      />
    </Box>
  );
}

export default App;
