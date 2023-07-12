import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getUser = () => {
  let store = JSON.parse(localStorage.getItem('login'));
  console.log(store)
  if (store && store.login) {
    return {
        name: store.name,
        login: store.login,
        admin: store.admin
    };

  }else{
    return null
  }
};

export const loginUser = createAsyncThunk('user/loginUser', async ({ email, password }) => {
  try {
    const response = await axios.post("http://localhost:8000/api/users/login", {
      email: email,
      password: password
    });
    console.log(response.data)
    localStorage.setItem('login', JSON.stringify({
      login: true,
      token: response.data.token,
      name: response.data.payload.name,
      admin:response.data.payload.admin
    }));
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const signupUser = createAsyncThunk('user/signupUser', async ({ name, email, password }) => {
    try {
      const response = await axios.post("http://localhost:8000/api/users/signup", {
        name: name,
        email: email,
        password: password
      });
      console.log(response.data)
      return response.data;
    } catch (error) {
      throw error;
    }
  });

const userSlice = createSlice({
  name: 'user',
  initialState: getUser(),
  reducers: {
    logout: (state)=>{
        state=null
        localStorage.removeItem('login')
        return null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        console.log(action.payload.payload)
        state = {        
            name: action.payload.payload.name,
            login: action.payload.payload.login,
            admin: action.payload.payload.admin
        };
        console.log(state)
        return ({        
            name: action.payload.payload.name,
            login: action.payload.payload.login,
            admin: action.payload.payload.admin
        })
      });
  },
});
export const { logout } = userSlice.actions;
export default userSlice.reducer;
