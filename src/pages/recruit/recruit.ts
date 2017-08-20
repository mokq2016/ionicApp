import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http'
/**
 * Generated class for the RecruitPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recruit',
  templateUrl: 'recruit.html',
})
export class RecruitPage {

  items: Array<Object> = [];
  currentPage: number = 1;
  pageSize: number = 10;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpProvider, public app: App) {
  }
  ngOnInit() {
    this.http.get('/api/v1/topics?page=1&tab=job&limit=10').subscribe((res) => {
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
    this.http.get('/api/v1/topics?page=1&tab=job&limit=10').subscribe((res) => {
      let result = res.json();
      if (result.success) {
        this.items = result.data;
        this.currentPage = 1;
        refresher.complete();
      }
    })
  }
  doInfinite(infiniteScroll) {
    this.http.get(`/api/v1/topics?page=${++this.currentPage}&tab=job&limit=${this.pageSize}`).subscribe((res) => {
      let result = res.json();
      if (result.success) {
        this.items = this.items.concat(result.data);
        infiniteScroll.complete();
      }
    })
  }

}
