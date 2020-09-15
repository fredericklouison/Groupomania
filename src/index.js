import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import{ BrowserRouter, Route , Switch} from'react-router-dom'
import * as serviceWorker from './serviceWorker';
import Accueil from './component/accueil/accueil';
import UserInterface from './component/userInterface/userInterface';
const Root = () => {
  return (
      <BrowserRouter>
          <Switch>
              <Route exact path='/' component={Accueil}></Route>
              <Route exact path='/interface/' component={UserInterface}></Route>
          </Switch>
      </BrowserRouter>
  )
}
ReactDOM.render(
  <Root />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
