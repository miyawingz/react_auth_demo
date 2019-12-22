import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Input from './input';
import { connect } from 'react-redux';
import { userSignIn } from '../actions';

class SignIn extends React.Component {
    userSignIn = (formValues) => {
        this.props.userSignIn(formValues);
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <div>
                <h1 className="center">Sign In</h1>
                <form onSubmit={handleSubmit(this.userSignIn)}>
                    <div className="row">
                        <Field name="email" component={Input} label="Email" size="s12 m6" />
                        <Field name="password" component={Input} label="Password" type="password" size="s12 m6" />
                    </div>
                    <div className="row right">
                        <button className="btn blue">Sign In</button>
                    </div>
                </form>
            </div>
        )
    }
}

function validate(formValues) {
    const { email, password } = formValues;
    const errors = {};

    if (!email) {
        errors.email = "email not exist"
    }

    if (!password) {
        errors.password = 'password not exist'
    }

    return errors;
}

SignIn = reduxForm({
    form: 'sign-in',
    validate: validate
})(SignIn);

export default connect(null, {
    userSignIn: userSignIn
})(SignIn);