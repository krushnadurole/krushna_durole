import './App.css';
import React from 'react';
import { Route, Switch, HashRouter} from 'react-router-dom'  
import Navbar from './components/Navbar';
import Hello from './components/Hello';
import Home from './components/Home';
import General from './components/General'
function App() {
  return (
    <>
      <HashRouter>
          <Navbar />

          <hr />

          <Switch>  
            <Route exact path="/Navbar"><Navbar/></Route>
            <Route exact path="/General"><General/></Route>
            <Route exact path="/Home"><Hello/></Route>
            <Route exact path="/Hello"><Home/></Route>
          
            
          </Switch>
        </HashRouter>
 
    </>
  );
}

export default App;
