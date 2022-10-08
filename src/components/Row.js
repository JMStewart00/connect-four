import Grid from '@mui/material/Grid';

function Row({ children }) {
  return (
    <Grid
        container
        rowSpacing={1}
        justifyContent="center"
    >
        { children }
    </Grid>
  );
}

export default Row;
