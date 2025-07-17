import React, { useState } from 'react'
import styles from './SignUp.module.css'
import { Link } from 'react-router-dom';
import { useSignUp } from '../features/users/useSignUp';

export default function SignUp() {
    const [data, setData] = useState({ name: '', email: '', age: '', password: '' });
    const {isCreating, signUp} = useSignUp();

    function handleSubmit(e) {
        e.preventDefault();
        signUp(data);
    }
    function handleChange(e) {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    return (
        <div className='app'>
            <div className={styles.signup}>
                <h1>Welcome to The ToDo Application</h1>
                <div className={styles.signupBody}>
                    <h3>SignUp</h3>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <input type='text' name='name' placeholder='Enter Name here..' value={data.name} onChange={handleChange} />
                        <input type='text' name='email' placeholder='Enter Email here..' value={data.email} onChange={handleChange} />
                        <input type='number' name='age' placeholder='Enter Age here..' value={data.age} onChange={handleChange} />
                        <input type='password' name='password' placeholder='Enter Password here..' value={data.password} onChange={handleChange} />
                        <button>{isCreating? 'Loading..' :'SignUp'}</button>
                    </form>
                </div>
                <Link to='/login'>
                    <p>Login</p>
                </Link>
            </div>
        </div>
    )
}
