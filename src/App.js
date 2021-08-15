import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from './pages/Home';
import {Products} from "../src/pages/Products"
import {Store} from "../src/pages/Store"
import {NoRoute} from "../src/components/NoRoute/NoRoute"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
            <Home/>
        </Route>
        <Route path="/categoría/:categoryId">
          <Products/>
        </Route>
        <Route path="/libros">
          <Store/>
        </Route>
        <Route>
          <NoRoute/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
