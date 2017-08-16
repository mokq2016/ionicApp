import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http'

/**
 * Generated class for the TopicPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-topic',
  templateUrl: 'topic.html',
})
export class TopicPage {

  topicId: string = '';
  topHtml: string = '';
  topInfo:any = {
    author:{}
  };
  replies:Array<Object> = [];
  imgUrl:string = '';
  constructor(public navCtrl: NavController, public app: App, public navParams: NavParams, public http: HttpProvider) {
    this.topicId = navParams.get('topicId');
  }
  ngOnInit() {
    this.http.get(`/api/v1/topic/${this.topicId}`).subscribe((res) => {
      let result = res.json();
      if(result.success){
        this.topInfo = result.data;
        this.replies = this.topInfo.replies;
        this.imgUrl = result.data.author.avatar_url;
        this.topHtml = result.data.content;
      }else{

      }
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TopicPage');
  }

}
