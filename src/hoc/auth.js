import React from 'react';
import { connect } from 'react-redux';

export default function (WrappedComponent) {
    class Auth extends React.Component {
        checkAuth() {
            const { auth, history } = this.props;
            if (!auth) {
                history.push('/');
            }
        }

        componentDidMount() {
            this.checkAuth();
        }

        componentDidUpdate() {
            this.checkAuth();
        }

        render() {
            return <WrappedComponent {...this.props} />
        }
    }

    function mapStateToProps(state) {
        return {
            auth: state.user.auth
        }
    }

    return connect(mapStateToProps)(Auth);
}



// export default function (preMessage) {
//     return function (WrappedComponent) {
//         class Auth extends React.Component {
//             log(message) {
//                 console.warn(preMessage, message)
//             }

//             render() {
//                 return <WrappedComponent log={this.log} />
//             }
//         }

//         return Auth;
//     }
// }


