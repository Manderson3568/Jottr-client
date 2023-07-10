import { useState } from "react";
import { useDispatch } from 'react-redux';
import { loginUser } from '../../Redux/userSlice';

const Login = () =>{
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')

    const dispatch = useDispatch();

    const handleSubmit = (event)=>{
        event.preventDefault(); // Prevent page reload
        dispatch(loginUser({ email, password }));
    }

    const handleEMailChange = (event) =>{
        setEmail(event.target.value)
    }
    
    const handlePasswordChange = (event) =>{
        setPassword(event.target.value)
    }

    return(
        <div id="login-page">
            <h1>Login</h1>
            <form onSubmit={handleSubmit} id="login">
                <label>Email<input type="text" onChange={handleEMailChange} value={email} /></label>
                <label>Psssword<input type="password" onChange={handlePasswordChange} value={password}/></label>
                <button>Login</button>
            </form>
        </div>

    )
}

export default Login