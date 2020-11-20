import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import GlobalHeader from "./components/molecules/globalHeader/";
import Root from "./components/pages/root";

const NormalLoad = React.lazy(() => import("./components/pages/normalLoad"));
const EffectiveLoad = React.lazy(
  () => import("./components/pages/effectiveLoad")
);
const NormalLoadPaged = React.lazy(
  () => import("./components/pages/normalLoadWithPaged")
);

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Grid container direction="column">
        <Grid item component="header">
          <GlobalHeader />
        </Grid>
        <Grid item container>
          <Container fixed>
            <Suspense fallback={<div>Setting Up....</div>}>
              <Switch>
                <Route path="/" component={Root} exact />
                <Route path="/normal" component={NormalLoad} />
                <Route path="/effective" component={EffectiveLoad} />
                <Route path="/normalPaged" component={NormalLoadPaged} />
              </Switch>
            </Suspense>
          </Container>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default App;
