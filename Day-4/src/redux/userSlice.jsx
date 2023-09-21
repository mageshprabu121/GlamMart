import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:"user",
    initialState:{
        user:null
    },
    reducers:{
        login1:(state,action)=>{
            state.user=action.payload;
        },
        logout:(state)=>{
            state.user=null;
        }
    }  
})
export const {login1,logout}=userSlice.actions;

export const selectUser =(state)=>state.user.user;

export default userSlice.reducer;