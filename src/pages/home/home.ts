import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  templateUrl: 'home.html',
})
export class HomePage {
  page1:any = 'AllRequestPage'
  page2:any = 'CreamRequestPage'
  page3:any = 'SharePage'
  page4:any = 'RequestAnswerPage'
  page5:any = 'RecruitPage'
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    console.log(this)
  }

}
