import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import '../assets/css/app.scss';
import { Route } from 'react-router-dom';
import Home from './home';
import SignUp from './sign_up';

const App = () => (
    <div className="container">
        <Route exact path="/" component={Home} />
        <Route path="/sign-up" component={SignUp} />
    </div>
);

export default App;
