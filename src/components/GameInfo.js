import Grid from '@mui/material/Grid';

function GameInfo({ gameOver, player }) {
  return (
    <Grid
        container
        justifyContent="center"
    >
        <h1 className="text-center">
            {
                gameOver ? (
                    'GAME OVER'
                ) : (
                    `CONTINUE PLAYING!`
                )
            }
        </h1>
    </Grid>
  );
}

export default GameInfo;
