import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CreamRequestPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-cream-request',
  templateUrl: 'cream-request.html',
})
export class CreamRequestPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreamRequestPage');
  }

}
