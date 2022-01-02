import { Box } from "@chakra-ui/react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/layout/navbar";

import Main from "./pages/main";
import Product from "./pages/product";
import Search from "./pages/search";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Box pt={20}>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>

          <Route exact path="/search">
            <Search />
          </Route>

          <Route exact path="/product">
            <Product />
          </Route>
        </Switch>
      </Box>
    </BrowserRouter>
  );
}

export default App;
