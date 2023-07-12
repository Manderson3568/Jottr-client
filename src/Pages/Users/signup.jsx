import { useState } from "react";
import { useDispatch } from 'react-redux';
import { signupUser } from '../../Redux/userSlice';

const Signup = () =>{
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const [name, setName] = useState('')

    const dispatch = useDispatch();

    const handleSubmit = (event)=>{
        event.preventDefault(); // Prevent page reload
        dispatch(signupUser({ name, email, password }));
    }

    const handleNameChange = (event) =>{
        setName(event.target.value)
    }

    const handleEMailChange = (event) =>{
        setEmail(event.target.value)
    }
    
    const handlePasswordChange = (event) =>{
        setPassword(event.target.value)
    }

    return (
        <div id="signup-page">
            <h1>Signup</h1>
            <form onSubmit={handleSubmit} id="signup-form">
                <label>Name<input type="text" onChange={handleNameChange} value={name}/></label>
                <label>Email<input type="text" onChange={handleEMailChange} value={email} /></label>
                <label>Password<input type="password" onChange={handlePasswordChange} value={password}/></label>
                <button>Login</button>
            </form>
        </div>
    )
}

export default Signup