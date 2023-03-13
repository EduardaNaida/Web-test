import React, {FC, useEffect} from 'react';
import {ChatInfo} from "./interface";
import {Avatar} from "../Avatar";
import "./chatItemList.scss"
import {useAppDispatch, UseAppSelector} from "../../redux/store";
import {fetchChats} from "../../redux/chatsSlice";
import {ListType} from '../../interface/page';
import image from "../../pages/index/48.png";

const ChatItem: FC<ChatItemType> = ({chatInfo}) => {

  return (
    <div>
      <div className={'chatItem'}>
        <div className={'chatImage'}>
          <Avatar size={'md'} src={chatInfo.avatar}/>
        </div>
        <div className={'chatInfo'}>
          <div className={'chatInfoHeader'}>
            <div className={'chatName'}>{chatInfo.title}</div>
            <div className={'time'}>12:00</div>
          </div>
          <span className={'chatMessage'}>{chatInfo.last_message.message}</span>
        </div>
      </div>
    </div>
  );
};

export const ChatItemList: FC<ChatItemType> = (props: ChatItemType) => {

  const dispatch = useAppDispatch()
  const className = `avatar`;

  // useEffect(() => {
  //   dispatch(fetchChats())
  // }, [dispatch])

  const chatInfo = UseAppSelector((state) => state.chats)

  // <div>
  //   <div className={className}>
  //     <Avatar/>
  //   </div>
  //   <div>{name}</div>
  //   <div>{message}</div>
  //   {chatInfo.loading === 'succeeded' ?
  //     chatInfo.entities.map((chat) => <ChatItem chatInfo={chat}/>)
  //     : 'loading'
  //   }
  // </div>
  return (
    <div>
      {chatInfo.loading === 'succeeded' ?
        <ChatItem chatInfo={props.chatInfo}/>
        : 'loading'
      }
    </div>
  );
};

type ChatItemType = { chatInfo: ListType }