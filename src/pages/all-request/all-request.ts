import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AllRequestPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  templateUrl: 'all-request.html'
})
export class AllRequestPage {
  items:Array<Object> = [{
    author:{
      loginname:'323'
    },
    create_at:'2017-01-22',
    title:'让我们来玩ionic吧',
    visit_count:4343,
    reply_count:232,
    last_reply_at:'今天'
  },
{
    author:{
      loginname:'323'
    },
    create_at:'2017-01-22',
    title:'让我们来玩ionic吧',
    visit_count:4343,
    reply_count:232,
    last_reply_at:'今天'
  }];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllRequestPage');
  }

}
