import { Profile } from '../profile/profile.interface';


export interface Messages {
  profile: Profile;
  date: Date;
  lastMessage: string;
}
