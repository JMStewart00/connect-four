import Grid from '@mui/material/Grid';
import CircleIcon from '@mui/icons-material/Circle';
import { Button } from '@mui/material';
import { cloneBoard } from '../utils/board';

function Cell({
  setBoard,
  setPlayer,
  player,
  space,
  color,
  gameOver,
}) {
  const handleClick = () => {
    if (gameOver) {
      return;
    }
    
    setBoard((prevState) => {
      let board = cloneBoard(prevState);
      for (let r = 6; r >= 0; r--) {
        if (board[r][space] === null) {
          board[r][space] = player;
          break
         }
      }

      return board;
    })

    setPlayer((prevState) => {
      return prevState === 3 ? 5 : 3;
    })
  }

  return (
    <Grid item>
      <Button 
        onClick={handleClick}
        sx={{
          backgroundColor: 'yellow',
        }}
      >
        <CircleIcon
          sx={{
            color,
          }}
        />
      </Button>
    </Grid>
  );
}

export default Cell;
