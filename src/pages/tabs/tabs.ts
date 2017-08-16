import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { InboxPage } from './../inbox/inbox'
/**
 * Generated class for the TabsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root: any;
  tab2Root: string;
  tab3Root: string;

  constructor() {
    // (~) Le lazy loading c'est bien pour les pages transverse à la navigation, pour des raisons experiences utilisateur les pages incontournable devrait pas être charger durant la navigation, c'est pour cela qu'on enlève le lazyLoading d' InboxPage car c'est une page d'aterissage
    this.tab1Root = InboxPage;
    this.tab2Root = 'ChannelsPage';
    this.tab3Root = 'ProfilePage';
  }

}
