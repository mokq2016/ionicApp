import { Injectable } from '@angular/core';
import {
  Http, Response, Headers, RequestOptions, URLSearchParams, RequestOptionsArgs, RequestMethod
} from '@angular/http';
import { AlertController } from "ionic-angular";
import 'rxjs/add/operator/map';
import { Observable } from "rxjs";
import { NativeProvider } from '../native/native'

/*
  Generated class for the HttpProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class HttpProvider {
  private _domainName = 'https://cnodejs.org'
  constructor(public http: Http, private alertCtrl: AlertController, private nativeProvider: NativeProvider) {
    console.log('Hello HttpProvider Provider');
  }
  public request(url: string = '', options: RequestOptionsArgs): Observable<Response> {
  	/*if (options.headers) {
      options.headers['token'] = this.globalData.token;
    } else {
      options.headers = new Headers({
        'token': this.globalData.token
      });
    }*/

    return Observable.create((observer) => {
      this.nativeProvider.showLoading();
      console.log('%c 请求前 %c', 'color:blue', '', 'url', url, 'options', options);
      this.http.request(this._domainName + url, options).subscribe(res => {
        this.nativeProvider.hideLoading();
        console.log('%c 请求成功 %c', 'color:green', '', 'url', url, 'options', options, 'res', res);
        observer.next(res);
      }, err => {
        this.failedHandle(url, options, err);
        observer.error(err);
      })
    })
  }

  public get(url: string, paramMap: any = null): Observable<Response> {
    return this.request(url, new RequestOptions({
      method: RequestMethod.Get,
      search: HttpProvider.buildURLSearchParams(paramMap)
    }))
  }

  // 默认Content-Type为application/json;
  public post(url: string, body: any = null): Observable<Response> {
    return this.request(url, new RequestOptions({
      method: RequestMethod.Post,
      body: body
    }));
  }

  public postFormData(url: string, paramMap: any = null): Observable<Response> {
    return this.request(url, new RequestOptions({
      method: RequestMethod.Post,
      search: HttpProvider.buildURLSearchParams(paramMap).toString(),
      headers: new Headers({
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Accept': 'application/json;charset=utf-8'
        /*'token': this.globalData.token*/
      })
    }));
  }
  /**
  * 将对象转为查询参数
  * @param paramMap
  * @returns {URLSearchParams}
  */
  private static buildURLSearchParams(paramMap): URLSearchParams {
    let params = new URLSearchParams();
    if (!paramMap) {
      return params;
    }
    for (let key in paramMap) {
      let val = paramMap[key];
      // if (val instanceof Date) {
      //   val = Utils.dateFormat(val, 'yyyy-MM-dd hh:mm:ss')
      // }
      params.set(key, val);
    }
    return params;
  }
  /**
   * 处理请求失败事件
   * @param url
   * @param options
   * @param err
   */
  private failedHandle(url: string, options: RequestOptionsArgs, err) {
    this.nativeProvider.hideLoading();
    console.log('%c 请求失败 %c', 'color:red', '', 'url', url, 'options', options, 'err', err);

    let msg = '请求发生异常', status = err.status;
    // if (!this.nativeProvider.isConnecting()) {
    //   msg = '请求失败，请连接网络';
    // } else {
    switch (status) {
      case 0:
        msg = '请求失败，请求响应出错！';
        break;
      case 404:
        msg = '请求失败，未找到请求资源！';
        break;
      case 500:
        msg = '请求失败，服务器出错，请稍后再试！';
        break;
      default:
        msg = '未知异常，请联系管理员！';
    }
    // }
    this.alertCtrl.create({
      title: '提示信息',
      message: msg,
      buttons: [{ text: '确定' }]
    }).present();
  }
}
