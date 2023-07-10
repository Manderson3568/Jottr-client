import { createSlice } from '@reduxjs/toolkit';

const getUser = () => {
    let store = JSON.parse(localStorage.getItem('login'))
    if(store && store.login){
        return store
    }
}

const userSlice = createSlice({
  name: 'user',
  initialState: getUser,
  reducers: {
    login: (state, action) => {state = action.payload},
  },
});

export const { login } = userSlice.actions;
export default userSlice.reducer;