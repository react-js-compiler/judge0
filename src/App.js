import React, { Component } from 'react';
import './App.css';

import { BrowserRouter  as Router, Route, Switch} from 'react-router-dom';
import routes from "./routes";
class App extends Component {
  render() {
    return (
      <Router>
          {this.showRoute(routes)}
      </Router>
    );
  }
  showRoute = route =>{
    var result = null;
    if(route.length > 0){
      result = route.map((route , index)=>{
        return <Route 
          path = {route.path}
          exact = {route.exact}
          key ={index}
          component = {route.main}
        />
      })
    }
    return<Switch>{result}</Switch>;
  }
}

export default App;