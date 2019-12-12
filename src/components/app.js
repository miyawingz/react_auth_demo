import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import '../assets/css/app.scss';
import { Route } from 'react-router-dom';
import Home from './home';
import AboutUs from './about_us';
import Nav from './nav';
import SecretData from './secret_data';
import SecretList from './secret_list';
import SignIn from './sign_in';
import SignUp from './sign_up';
import auth from '../hoc/auth';

const App = () => (
    <div>
        <Nav />
        <div className="container">
            <Route exact path="/" component={Home} />
            <Route path="/about-us" component={AboutUs} />
            <Route path="/secret-data" component={auth(SecretData)} />
            <Route path="/secret-list" component={auth(SecretList)} />
            <Route path="/sign-in" component={SignIn} />
            <Route path="/sign-up" component={SignUp} />
        </div>
    </div>
);

export default App;
