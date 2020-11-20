import React from "react";
import { withRouter, NavLink as RouterLink } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Red from "@material-ui/core/colors/red";

const cssStyling = makeStyles(theme => ({
  linkColor: {
    color: theme.palette.common.white
  },
  linkSpacer: {
    margin: theme.spacing(0, 1)
  },
  activeClass: {
    "& .MuiTypography-noWrap": {
      color: Red[500]
    }
  }
}));

const GlobalHeader = () => {
  const styling = cssStyling();

  return (
    <AppBar position="relative" component="div">
      <Toolbar>
        <Grid
          container
          justify="space-between"
          alignContent="center"
          alignItems="center"
        >
          <Grid item sm={6}>
            <Typography variant="h6" noWrap>
              React Loading Huge Lists
            </Typography>
          </Grid>
          <Grid container item sm={6} justify="flex-end">
            <Grid item>
              <Link
                component={RouterLink}
                to="/normal"
                activeClassName={styling.activeClass}
              >
                <Typography
                  variant="h6"
                  classes={{ root: styling.linkSpacer }}
                  className={styling.linkColor}
                  noWrap
                >
                  Normal Load
                </Typography>
              </Link>
            </Grid>
            <Grid item>
              <Link
                component={RouterLink}
                to="/normalPaged"
                activeClassName={styling.activeClass}
              >
                <Typography
                  variant="h6"
                  className={styling.linkColor}
                  classes={{ root: styling.linkSpacer }}
                  noWrap
                >
                  Normal Load Pageset
                </Typography>
              </Link>
            </Grid>
            <Grid item>
              <Link
                component={RouterLink}
                to="/effective"
                activeClassName={styling.activeClass}
              >
                <Typography
                  variant="h6"
                  className={styling.linkColor}
                  classes={{ root: styling.linkSpacer }}
                  noWrap
                >
                  Efficient Load
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(GlobalHeader);
