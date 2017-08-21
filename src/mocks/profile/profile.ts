
import { Profile } from '../../models/profile/profile.interface';

const profileList: Profile[] = [
  { firstName: 'Yohann', lastName: 'Atticot', avatar:'assets/img/avatar.png', email: 'yohann@paul.com', dateOfBirth: new Date()},
  { firstName: 'Laura', lastName: 'Atticot', avatar:'assets/img/avatar.png', email: 'laura@paul.com', dateOfBirth: new Date()},
  { firstName: 'Cedric', lastName: 'Atticot', avatar:'assets/img/avatar.png', email: 'cedric@paul.com', dateOfBirth: new Date()},
  { firstName: 'Pauline', lastName: 'Atticot', avatar:'assets/img/avatar.png', email: 'pauline@paul.com', dateOfBirth: new Date()},
];


export const PROFILE_LIST = profileList;
