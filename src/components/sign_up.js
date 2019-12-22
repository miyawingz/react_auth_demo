import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Input from './input';
import { connect } from 'react-redux';
import { userSignUp } from '../actions';

class SignUp extends React.Component {
    userSignUp = (formValues) => {
        this.props.userSignUp(formValues);
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <div>
                <h1 className="center">Sign Up</h1>
                <form onSubmit={handleSubmit(this.userSignUp)}>
                    <div className="row">
                        <Field name="name" component={Input} label="Name" size="s12 m6" />
                        <Field name="email" component={Input} label="Email" size="s12 m6" />
                    </div>
                    <div className="row">
                        <Field name="password" component={Input} label="Password" type="password" size="s12 m6" />
                        <Field name="confirmPW" component={Input} label="Confirm Password" type="password" size="s12 m6" />
                    </div>

                    <div className="row right">
                        <button className="btn blue">create account</button>
                    </div>
                </form>
            </div>
        )
    }
}

function validate(formValues) {
    const { name, email, password, confirmPW } = formValues;
    const errors = {};

    if (!name) {
        errors.name = "name not exist"
    }

    if (!email) {
        errors.email = "email not exist"
    }

    if (!password) {
        errors.password = 'password not exist'
    }

    if (confirmPW !== password) {
        errors.confirmPW = 'pw not match'
    }

    return errors;
}

SignUp = reduxForm({
    form: 'sign-up',
    validate: validate
})(SignUp);

export default connect(null, {
    userSignUp: userSignUp
})(SignUp);