import React from 'react';
import { Link } from 'react-router-dom';

export default props => (
    <div>
        <h1 className="center">welcome to our app</h1>
        <div className="center">
            <Link to="/sign-up" className="btn blue">sign up</Link>
        </div>
    </div>
)