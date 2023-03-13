import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {getMessages} from "../api/chat";

export interface MessageState {
  entities: []
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialState = {
  entities: [],
  loading: 'idle',
} as MessageState

export const fetchMessages = createAsyncThunk('chats/fetchMessages', async (chat_Id: string) => {
  return await getMessages(chat_Id)
})

export const messageSlice = createSlice({
  name: 'chats',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchMessages.fulfilled.type]: (state, action) => {
      //console.log(state)
      state.entities = action.payload.response
      // console.log(state)
      state.loading = 'succeeded'
    }
  }
})

export const {} = messageSlice.actions

export default messageSlice.reducer