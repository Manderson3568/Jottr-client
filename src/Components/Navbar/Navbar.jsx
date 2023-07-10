import {NavLink, } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
const Navbar = () =>{
    const user = useSelector((state) => state.user); 
    console.log(user)
    return (
        <nav id="main">
            <NavLink to="/" >Home</NavLink>
            <NavLink to="/" >Resources</NavLink>
            <NavLink to="/" >Notes</NavLink>
            {user.login ? <NavLink to="/" >logOut</NavLink>  : <NavLink to="/" >login</NavLink>}  
        </nav>
    )
}
export default Navbar