import {Avatar} from "../Avatar";
import image from "../../pages/index/48.png";
import vectorIcon from "../../pages/index/Vector.png";
import React, {FC} from "react";
import './message.scss'
import {ListType} from "../../interface/page";
import {ChatsState} from "../../redux/chatsSlice";
import {UseAppSelector} from "../../redux/store";
import {UserMessage} from "./UserMessage";

export type MessageType = {
  chatInfo: ListType,
  my: boolean,
  main: boolean
}

type DialogsType = {
  chatInfo: ChatsState,
}

export const Dialogs: FC<DialogsType> = ({chatInfo}) => {

  const chatInfo2 = UseAppSelector((state) => state.chats)

  const message = chatInfo.entities.map((state, index) => {
    return (
      <Message key={index} chatInfo={state} my={true} main={false}/>
    )
  })

  return (
    <div>{chatInfo2.loading === 'succeeded' ? message : 'loading'}</div>
  )
}

const Message: FC<MessageType> = ({chatInfo, my, main}) => {
  const userInfo = chatInfo.users.map((user, index) => {
    return (
      <UserMessage key={index} users={user} my={true} main={false} chatInfo={chatInfo}/>
    )
  })

  return (
    <div>
      {userInfo}
    </div>
  )
}