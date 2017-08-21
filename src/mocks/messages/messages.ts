import { Messages } from '../../models/messages/messages.interface';
import { PROFILE_LIST } from '../profile/profile';

const profileList = PROFILE_LIST;
const messageList: Messages[] = [];

profileList.forEach((profile) => {
  messageList.push({ profile: profile, date: new Date(), lastMessage: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, quia aliquam nisi laboriosam sequi quisquam, inventore vitae voluptatem, ducimus animi, totam adipisci sint blanditiis earum quae nam. Cumque, quasi necessitatibus!" });
});

// const messageList: Messages[] = [
//   { user: userList[0], date: new Date()},
//   { user: userList[1], date: new Date()},
//   { user: userList[2], date: new Date()},
//   { user: userList[3], date: new Date()}
// ];

export const MESSAGE_LIST = messageList;
