import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {getChatList} from "../api/chat";

export interface ChatsState {
  entities: []
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialState = {
  entities: [],
  loading: 'idle',
} as ChatsState

export const fetchChats = createAsyncThunk('chats/fetchChats', async () => {
  return await getChatList()
})

export const chatsSlice = createSlice({
  name: 'chats',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchChats.fulfilled.type]: (state, action) => {
      state.entities = action.payload.response
      state.loading = 'succeeded'
    }
  }
})

export const {} = chatsSlice.actions

export default chatsSlice.reducer