import { Link, useHistory } from 'react-router-dom';
import React, { useState } from 'react'
import './Login.css'
import { auth } from './firebase';
function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')
    const signIn = e => {
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth1) => {
                console.log(auth1);
                if (auth1) {
                    history.push('/')
                }
            })
            .catch(err => alert(err.message))

    }
    const register = e => {
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth1) => {
                console.log(auth1);
                if (auth1) {
                    history.push('/')
                }
            })
            .catch(err => alert(err.message))


    }
    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login_logo"
                    src="https://i.insider.com/539f3ffbecad044276726c01?width=1100&format=jpeg&auto=webp" alt=""
                />
            </Link>
            <div className="login_container">
                <h1>Sign in</h1>
                <form >
                    <h5>Email</h5>
                    <input
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        type="text" />
                    <h5>password</h5>
                    <input
                        value={password}
                        onChange={e => setpassword(e.target.value)}
                        type="password"
                    />
                    <button
                        type="submit"
                        onClick={signIn}
                        className="login_signInButton"
                    >Sign in</button>
                </form>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                <button
                    onClick={register}
                    className="login_registerButton">create Amazon account</button>
            </div>

        </div>
    )
}

export default Login
