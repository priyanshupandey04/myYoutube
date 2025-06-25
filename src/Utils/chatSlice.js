import { createSlice } from "@reduxjs/toolkit";


const chatSlice = createSlice({
    name: "chat",
    initialState:{
        chats :[]
    },
    reducers:{
        addChat: (state, action) => {
            // state.chats.splice(100, 2)
            state.chats.unshift(action.payload)
        }
    }
})

export const { addChat } = chatSlice.actions
export default chatSlice.reducer