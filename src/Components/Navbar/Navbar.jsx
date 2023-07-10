import {NavLink, } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
const Navbar = () =>{
    const user = useSelector((state) => state.user);
    console.log(user)
    return (
        <nav id="main">
            <NavLink to="/" >Home</NavLink> |
            <NavLink to="/resouces" >Resources</NavLink> |
            <NavLink to="/notes" >Notes</NavLink> |
            {/* <p>{user}</p> */}
            <p>{user ? user.name : ""}</p>
            {user ? <NavLink to="/logout" >Logout</NavLink>  : <NavLink to="/login" >Login</NavLink>}  
        </nav>
    )
}
export default Navbar