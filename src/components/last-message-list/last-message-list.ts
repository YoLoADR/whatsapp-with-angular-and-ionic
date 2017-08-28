import { Component, OnInit } from '@angular/core';
import { ChatService } from "../../providers/chat/chat.service";
import { Messages } from "../../models/messages/messages.interface";
import { Observable } from "rxjs/Observable";
import { NavController } from "ionic-angular";

/**
 * Generated class for the LastMessageListComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'app-last-message-list',
  templateUrl: 'last-message-list.html'
})
export class LastMessageListComponent implements OnInit {

  messageList$: Observable<Messages[]>;

  ngOnInit(): void {
    this.messageList$ = this.chatService.getLastMessagesForUser();
    console.log("this.messageList$", this.messageList$);
  }

  constructor(
    private navController: NavController,
    private chatService: ChatService) {
  }

  navigateToMessage(message: Messages){
    const selectedProfile = {
      $key: message.userToId,
      firstName: message.userToProfile.firstName,
      lastNames: message.userToProfile.lastName
    }

    this.navController.push('MessagePage', { profile: selectedProfile});
  }

}
