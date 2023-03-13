import React, {FC, useEffect} from "react";
import {IPage} from "../../interface/page";
import './Pages.scss'
import {Dialogs} from "../../components/Message";
import {Header} from "../../components/Header";
import {Input} from "../../components/Input";
import {ChatItemList} from "../../components/ChatItemList";
import {SystemMessage} from "../../components/SystemMessage";
import {NewMessage} from "../../components/NewMessage";
import {useAppDispatch, UseAppSelector} from "../../redux/store";
import {fetchChats} from "../../redux/chatsSlice";

export const PageIndex: FC<IPage> = (props: IPage) => {
  const {title} = props;
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchChats())
  }, [dispatch])

  const chatInfo = UseAppSelector((state) => state.chats)
  // const chatInfo2 = UseAppSelector((state) => state.chats.entities)
  //
  // console.log(chatInfo2)
  //
  // const message = chatInfo2.map((state) => {
  //   return (
  //     <Message chatInfo={state} my={true} main={false}/>
  //   )
  // })
  return (
    <div className={'main'}>
      <div className={'leftBlock'}>
        <div className={'chatsHeader'}><h4>All chats</h4></div>
        <div className={'chatsList'}>
          {chatInfo.entities.map((chat, index) =>
            <ChatItemList key={index} chatInfo={chat}/>)}
        </div>
      </div>
      <div className={'rightBlock'}>
        <Header/>
        <div className={'dialogs'}>
          <div>
            <SystemMessage/>
            <NewMessage/>
            <Dialogs chatInfo={chatInfo}/>
            {/*{message}*/}
            {/*<Message chatInfo={chatInfo} my={true} main={false}/>*/}
            {/*<Message chatInfo={chatInfo} my={false} main={false}/>*/}
          </div>
        </div>
        <Input/>
      </div>
    </div>
  )
}