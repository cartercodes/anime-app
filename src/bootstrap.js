import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HeroList from '../src/components/herolist/heroList';
import VillainList from '../src/components/villainlist/villainList';

import App from './components/app';

import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';
import ImageUploader from './components/imageUploader/imageUpload';

function main() {
  ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/heroes' component={HeroList}/>
        <Route path='/villains' component={VillainList}/>
        <Route path='/uploads' component={ImageUploader}/>
      </Switch>
    </BrowserRouter>
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
