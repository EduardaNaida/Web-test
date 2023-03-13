export interface IPage{
    title?: string
}


export type ChatListType = ListType[]


export type ListType = {
  "id": string,
  "created_at": number,
  "title": string,
  "avatar": string,
  "private": boolean,
  "last_message": LastMessageType,
  "users": Array<UsersType>,
  "count_unread": number
}

type LastMessageType = {
  "created_at": number,
  "user_id": string,
  "user_name": string,
  "user_surname": string,
  "you": boolean,
  "message": string
}

export type UsersType = {
  "id": string,
  "name": string,
  "surname": string,
  "avatar": string
}