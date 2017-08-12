import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {StatusBar} from '@ionic-native/status-bar';
import {ToastController, LoadingController, Platform, Loading, AlertController} from 'ionic-angular';
/*
  Generated class for the NativeProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class NativeProvider {
  private loading: Loading;
  private loadingIsOpen: boolean = false;

  constructor(private toastCtrl: ToastController,
              private alertCtrl: AlertController,
              private statusBar: StatusBar,
              private loadingCtrl: LoadingController) {
    console.log('Hello NativeProvider Provider');
  }
 /**
   * 统一调用此方法显示loading
   * @param content 显示的内容
   */
  showLoading(content: string = '加载中...'): void {
    if (!this.loadingIsOpen) {
      this.loadingIsOpen = true;
      this.loading = this.loadingCtrl.create({
        content: content
      });
      this.loading.present();
      setTimeout(() => {//最长显示10秒
        this.loadingIsOpen && this.loading.dismiss();
        this.loadingIsOpen = false;
      }, 10000);
    }
  }
  /**
   * 关闭loading
   */
  hideLoading(): void {
    this.loadingIsOpen && this.loading.dismiss();
    this.loadingIsOpen = false;
  }
}
