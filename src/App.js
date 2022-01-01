import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/layout/navbar";

import Main from "./pages/main";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
