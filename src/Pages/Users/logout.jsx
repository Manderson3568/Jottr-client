import { useEffect } from "react"
import { useDispatch } from 'react-redux';
import {logout} from "../../Redux/userSlice"

const Logout = ()=>{
    const dispatch = useDispatch(); // Get the dispatch function
    useEffect(()=>{
        dispatch(logout())
    },[])
    return(
        <div id="logout-page">
            <h1>Logout Successful</h1>
        </div>
    )
}
export default Logout