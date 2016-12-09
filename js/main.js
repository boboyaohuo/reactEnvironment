import React from 'react';
import {render} from 'react-dom';
import {Router, Route, hashHistory, IndexRoute, IndexRedirect} from 'react-router';
import $ from './jquery-1.7.2.min.js';


import Swiper from './components/Swiper.jsx';
import Repos from './components/Repos.jsx';

render((
    <Router history={hashHistory}>
        <Route path="/" component={Swiper}>
        </Route>
    </Router>
), document.getElementById('app'));

// ReactDOM.render(<App username="pwh" />, document.getElementById('app'))

// ReactDOM.render((
//   <Router >
//     <Route path="/" component={App}/>
//   </Router>
// ), document.getElementById('app'));
