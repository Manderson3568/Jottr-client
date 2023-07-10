import {NavLink, } from 'react-router-dom'
import { useSelector} from 'react-redux';
const Navbar = () =>{
    const user = useSelector((state) => state.user);
    console.log(user)
    return (
        <nav id="main">
            <NavLink to="/" >Home</NavLink> | 
            <NavLink to="/resouces" >Resources</NavLink> | 
            <NavLink to="/notes" >Notes</NavLink> | 
            <p>{user ? user.name : ""}</p>
            {user ? <NavLink to="/logout" >Logout</NavLink> : <div id="user-menu"><NavLink to="/login" >Login</NavLink> | <NavLink to="/signup" >Signup</NavLink></div>}  
        </nav>
    )
}
export default Navbar