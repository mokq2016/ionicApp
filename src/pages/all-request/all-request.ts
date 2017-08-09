import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
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
export class AllRequestPage{
  items: Array<Object> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  }
  ngOnInit(){
  this.http.get('https://cnodejs.org/api/v1/topics?page=0&tab=all&limit=20').subscribe((res) => {
      let result = res.json();
      if(result.success){
        this.items = result.data;
      }
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AllRequestPage');
    
  }

}
