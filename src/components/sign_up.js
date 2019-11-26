import React from 'react';
import { Field, reduxForm } from 'redux-form';

class SignUp extends React.Component {
    userSignUp(FormValues) {
        console.log(FormValues);
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <div>
                <h1 className="center">Sign Up</h1>
                <form onSubmit={handleSubmit(this.userSignUp)}>
                    <div className="row">
                        <div className="col s12 input-field">
                            <Field type="text" name="Name" component="input" />
                            <label>Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12 input-field">
                            <Field type="text" name="Email" component="input" />
                            <label>Email</label>
                        </div>
                    </div>
                    <div className="row right">
                        <button className="btn blue">create account</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default reduxForm({
    form: 'sign-up'
})(SignUp);