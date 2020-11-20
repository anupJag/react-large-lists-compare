import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const Root = () => {
  return (
    <Box p={2}>
      <Grid container>
        <Typography variant="h5">
          {" "}
          THIS IS THE ROOT PAGE. CLICK ON LINKS ABOVE TO NAVIGATE{" "}
        </Typography>
      </Grid>
    </Box>
  );
};

export default Root;
