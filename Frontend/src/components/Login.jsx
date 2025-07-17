import React, { useState } from 'react'
import styles from './Login.module.css'
import { useLogin } from '../features/users/useLogin';
import { Link } from 'react-router-dom';

export default function SignUp() {
    const [data, setData] = useState({ email: '', password: '' });
    const {isLoading, login} = useLogin();

    function handleSubmit(e) {
        e.preventDefault();
        login(data);
    }
    function handleChange(e) {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    return (
        <div className='app'>
            <div className={styles.login}>
                <h1>Welcome to The ToDo Application</h1>
                <div className={styles.loginBody}>
                    <h3>Login</h3>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <input type='text' name='email' placeholder='Enter Email here..' value={data.email} onChange={handleChange} />
                        <input type='password' name='password' placeholder='Enter Password here..' value={data.password} onChange={handleChange} />
                        <button>{isLoading? 'Loading..' :'Login'}</button>
                    </form>
                </div>
                <Link to='/signup'>
                    <p>SignUp</p>
                </Link>
            </div>
        </div>
    )
}
