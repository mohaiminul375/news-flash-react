import { Route, Router, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" />
          <Route path="/article/:id" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
