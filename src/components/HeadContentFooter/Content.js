import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";
import Home from "../Home/Home";
import Practice from "../Practice/Practice";
import Pinterest from "../Pinterest/Pinterest";
import Quick from "../Quick/Quick";
import AprobApp from "../AprobApp/AprobApp";
import BancoRio from "../BancoRio/BancoRio";
import Help from "../Help/Help";
import './css/Content.css';

class Content extends Component {

  render() {
    return (
      <div className="Content">
           <Switch>
              <Route exact path = "/" component = {Home}></Route>
              <Route path = "/practice" component = {Practice}></Route>
              <Route path = "/pinterest" component = {Pinterest}></Route>
              <Route path = "/quick" component = {Quick}></Route>
              <Route path = "/aprobapp" component = {AprobApp}></Route>
              <Route path = "/bancoRio" component = {BancoRio}></Route>
              <Route path = "/help" component = {Help}></Route>
          </Switch>
      </div>
    );
  }
}

export default Content;