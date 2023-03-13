import { configureStore } from '@reduxjs/toolkit'
import chatsReducer from "./chatsSlice";
import thunk from "redux-thunk";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import messageReducer from "./messageSlice";


export const store = configureStore({
  reducer: {
    chats: chatsReducer,
    message: messageReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunk),
})


export type RootState = ReturnType<typeof store.getState>
export const UseAppSelector: TypedUseSelectorHook<RootState> = useSelector
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()