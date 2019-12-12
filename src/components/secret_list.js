import React from 'react';
import auth from '../hoc/auth';

const SecretList = props => {
    return (
        <div>
            <h1 className="center red-text">secret list</h1>
            <ol>
                <li>abc</li>
                <li>def</li>
                <li>abc</li>
                <li>def</li>
                <li>abc</li>
                <li>def</li>
            </ol>
        </div>
    )
}

export default SecretList;