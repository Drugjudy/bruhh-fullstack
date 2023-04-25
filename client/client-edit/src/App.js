import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Navbaar from './components/Navbaar';
import Home from './components/Home';
import Register from './components/Register';
import Edit from './components/Edit';
import Details from './components/Details';
import {Switch,Route} from "react-router-dom"
import UserList from './components/delete';
import Register1 from './components/r1';




function App() {
  return (
   <>
    <Navbaar />
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/register1" component={Register1} />
      <Route exact path="/edit/:id" component={Edit} />
      <Route exact path="/view/:id" component={Details} />
   
    </Switch>
   
   </>
  );
}

export default App;






