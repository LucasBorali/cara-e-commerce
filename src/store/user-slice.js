import { createSlice } from "@reduxjs/toolkit";



const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: false
    },
    reducers: {
        setUser(state){
            state.user = true
        } 
    }
})

export const userActions = userSlice.actions;

export default userSlice