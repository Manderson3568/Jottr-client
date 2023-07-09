import './App.css';
import {useState, useEffect} from "react"
import axios from 'axios'
function App() {
  const [email, setEmail]=useState("")
  const [password, setPassword]=useState("")
  const [postInput, setPostInput]=useState('')
  const [loggedIn, setLoggedIn]=useState(null)
  const [store, setStore]=useState(null)

  const storeCollector = () =>{
    let store = JSON.parse(localStorage.getItem('login'))
    if(store && store.login){
      setStore(store)
      setLoggedIn(true)
    }
  }

  const login=()=>{
    axios.post("http://localhost:8000/api/login",{
      email: email,
      password: password
    })
    .then(res =>{
      console.log(res)
      localStorage.setItem('login', JSON.stringify({
        login: true,
        token: res.data.token
      }))
      storeCollector()
    })
    .catch(err =>{
      console.log(err)
    })
  }

  useEffect(()=>{
    storeCollector()
  },[])



  const createPost = ()=>{
    let token = "Bearer " + store.token
    let config = {
      headers:{
        Authorization: token
      }
    }

    axios.post('http://localhost:8000/api/posts',{
      post: postInput
    }, config)
    .then(res=>{
      console.log("protected route", res)
    }).catch (err =>{
      console.log(err)
    })
  }



  return (
    <div className="App">
      {loggedIn?       
        <div id="post-input">
          <textarea onChange={(event)=>{
            setPostInput(event.target.value)
          }}></textarea>
          <button onClick={createPost}>Post</button>
        </div>
        :
        <div id="login">
          <p>email:</p>
          <input type="text" onChange={(event)=>{
            setEmail(event.target.value)
          }} />
          <p>password:</p>
          <input type="password" onChange={(event)=>{
            setPassword(event.target.value)
          }} />
          <button onClick={()=>{
            login()
          }}>Login</button>
        </div>
      }

    </div>
  );
}

export default App;
