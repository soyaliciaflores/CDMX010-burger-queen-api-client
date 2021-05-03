import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Login from './components/Login'
import Menus from './components/Menus'
import Dinner from './components/Dinner'
import Breakfast from './components/Breakfast'
import Orders from './components/Orders'
import Inventory from './components/Inventory'
import Registerwaiters from './components/Registerwaiters'
import Adminwaiters from './components/Adminwaiters'
import Cookers from './components/Cookers'


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/menus">
          <Menus/>
        </Route>
        <Route path="/dinner">
          <Dinner/>
        </Route>
        <Route path="/breakfast">
          <Breakfast/>
        </Route>
        <Route path="/orders">
          <Orders/>
        </Route>
        <Route path="/inventory">
          <Inventory/>
        </Route>
        <Route path="/Registerwaiters">
          <Registerwaiters/>
        </Route>
        <Route path="/adminwaiters">
          <Adminwaiters/>
        </Route>
        <Route path="/cookers">
          <Cookers/>
        </Route>
        <Route path="/">
          <Login/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
