import React, {FC, useEffect} from 'react';
import {Avatar} from "../../Avatar";
import image from "../../../pages/index/48.png";
import vectorIcon from "../../../pages/index/Vector.png";
import {ListType, UsersType} from "../../../interface/page";
import {useAppDispatch} from "../../../redux/store";
import {fetchMessages} from "../../../redux/messageSlice";

export type UserMessageType = {
  users: UsersType,
  my: boolean,
  main: boolean,
  chatInfo: ListType
}

export const UserMessage: FC<UserMessageType> = ({users, my, main, chatInfo}) => {
  const date = new Date(chatInfo.last_message.created_at);
  const time = date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchMessages(chatInfo.id))
  }, [dispatch])
  return (
    <div>
      {chatInfo.last_message.you ?
        <div className={'message'}>
          <Avatar size={'sm'} src={users.avatar}/>
          <div className={'messageContent'}>
            <div className={'name'}><span>{users.name  + ' ' + users.surname}</span></div>
            <div className={'messageText'}>
              {chatInfo.last_message.message}
              <div className={'messageInfo'}>
                <span className={'messageTime'}>{time}</span>
              </div>
            </div>
          </div>
        </div>
        :
        <div className={'userMessage'}>
          {chatInfo.last_message.message}
          <span className={'messageInfoUser'}>
          <span className={'messageTime'}>{time}</span>
          <div className={'messageIcon'}>
            <img src={vectorIcon} alt="vectorIcon"/>
          </div>
        </span>
        </div>
      }
    </div>
  );
};