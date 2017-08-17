import { Messages } from '../../models/messages/messages.interface';
import { USER_LIST } from '../users/users';

const userList = USER_LIST;
const messageList: Messages[] = [];

userList.forEach((user) => {
  messageList.push({user: user, date: new Date(), lastMessage: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, quia aliquam nisi laboriosam sequi quisquam, inventore vitae voluptatem, ducimus animi, totam adipisci sint blanditiis earum quae nam. Cumque, quasi necessitatibus!" });
});

// const messageList: Messages[] = [
//   { user: userList[0], date: new Date()},
//   { user: userList[1], date: new Date()},
//   { user: userList[2], date: new Date()},
//   { user: userList[3], date: new Date()}
// ];

export const MESSAGE_LIST = messageList;
