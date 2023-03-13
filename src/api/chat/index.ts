import {wrapper} from "../../utils/wrapper";
import {URLS} from "../../constants/urls";

const url = 'https://api.lenzaos.com/test/';

export const getChatList = () => {
  return wrapper("get", url + URLS.LIST)
}


export const getMessages = (id: string) => {
  const urlMessage = url + URLS.MESSAGES
  return wrapper("get", url + URLS.MESSAGES + '?chat_id=' + id)
}
