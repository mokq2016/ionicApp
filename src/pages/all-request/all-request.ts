import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http'
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
  items: Array<Object> = [];
  currentPage: number = 1;
  pageSize: number = 10;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpProvider, public app: App) {
  }
  ngOnInit() {
    this.http.get('/api/v1/topics?page=1&tab=all&limit=10').subscribe((res) => {
      let result = res.json();
      if (result.success) {
        this.items = result.data;
        this.currentPage = 1;
      }
    })
  }
  showTopic(id) {
    this.app.getRootNav().push('TopicPage', {
      topicId: id
    })
  }
  doRefresh(refresher) {
    this.http.get('/api/v1/topics?page=1&tab=all&limit=10').subscribe((res) => {
      let result = res.json();
      if (result.success) {
        this.items = result.data;
        this.currentPage = 1;
        refresher.complete();
      }
    })
  }
  getType(top,good,tab){
    let type = '';
    if(top){
      return '置顶';
    }else if(good){
      return '精华';
    }else{
      switch(tab){
        case 'share':
        type = '分享';
        break;
        case 'job':
        type = '招聘';
        break;
        case 'ask':
        type = '问答';
        break;
        default:
        type = '未知类型';
      }
      return type;
    }
  }
  doInfinite(infiniteScroll) {
    this.http.get(`/api/v1/topics?page=${++this.currentPage}&tab=all&limit=${this.pageSize}`).subscribe((res) => {
      let result = res.json();
      if (result.success) {
        this.items = this.items.concat(result.data);
        infiniteScroll.complete();
      }
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AllRequestPage');

  }

}
