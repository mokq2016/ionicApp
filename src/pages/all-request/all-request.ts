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
  currentPage:number = 1;
  pageSize:number = 10;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  }
  ngOnInit(){
  this.http.get('/api/v1/topics?page=1&tab=all&limit=10').subscribe((res) => {
      let result = res.json();
      if(result.success){
        this.items = result.data;
        this.currentPage = 1;
      }
    })
  }
  doRefresh(refresher){
    this.http.get('/api/v1/topics?page=1&tab=all&limit=10').subscribe((res) => {
      let result = res.json();
      if(result.success){
        this.items = result.data;
        this.currentPage = 1;
        refresher.complete();
      }
    })
  }
  doInfinite(infiniteScroll){
    this.http.get(`/api/v1/topics?page=${ ++this.currentPage}&tab=all&limit=${this.pageSize}`).subscribe((res) => {
      let result = res.json();
      if(result.success){
        this.items = this.items.concat(result.data);
        infiniteScroll.complete();
      }
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AllRequestPage');
    
  }

}
