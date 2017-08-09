import { Component } from '@angular/core';
import { IonicPage,NavController,Tabs, NavParams } from 'ionic-angular';

/**
 * Generated class for the TabsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root = 'HomePage';
  tab2Root = 'PublishPage';
  tab3Root = 'MessagePage';
  tab4Root = 'AboutPage';
  constructor() {
  }

}
