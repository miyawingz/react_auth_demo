import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userSignIn } from '../actions';
import { userSignOut } from '../actions';

class Nav extends React.Component {
    AuthBtn = () => {
        const { auth, userSignIn, userSignOut } = this.props;
        if (auth) {
            return <button onClick={userSignOut} className="btn yellow waves-effect waves-light">Sign Out</button>
        }

        return <button onClick={userSignIn} className="btn blue lighten-3 waves-effect waves-light">sign in</button>
    }

    render() {
        console.log('auth', this.props.auth);

        const navStyles = {
            padding: '0 8px',
        }

        return (
            <nav className="blue lighten-2" style={navStyles}>
                <div className="nav-wrapper">
                    <Link className="brand-logo" to="/">Auth App</Link>
                    <ul className="right">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about-us">About Us</Link>
                        </li>
                        <li>
                            <Link to="/secret-data">Secret Data</Link>
                        </li>
                        <li>
                            <Link to="/secret-list">Secret List</Link>
                        </li>
                        <li>
                            <this.AuthBtn />
                            {/* {this.AuthBtn()} */}
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

function mapStateToProps(state) {
    return {
        auth: state.user.auth
    }
}

export default connect(mapStateToProps, {
    userSignIn: userSignIn,
    userSignOut: userSignOut
})(Nav);