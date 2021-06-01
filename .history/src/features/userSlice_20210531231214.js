import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },

  reducers: {
    login: (state, action) => {
      //Go inside the state grab the state & user then assign =>{action.payload} this to him, in this case he assign the action trigger by the user
      state.user = action.payload;
    },

    logout: (state) => {
      state.user = null; //assign the action back to null
    },
  },
});

//* this is how we can get access to the action, logIn & logOut
export const {login, logout} = userSlice.actions;

//*selector is how we get the value that was pass to the action, now we can get that action & use it with the help of selector
export const selectUser = (state) => state.user.user; //the first user is the one on line 4 & second on line 6
export default userSlice.reducer;
