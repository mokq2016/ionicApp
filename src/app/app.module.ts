import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { MyApp } from './app.component';
import { FormatDatePipe } from '../pipes/format-date/format-date'
import {PipesModule} from '../pipes/pipes.module'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpProvider } from '../providers/http/http';
import { NativeProvider } from '../providers/native/native';

@NgModule({
  declarations: [
   MyApp
  ],
  imports: [
    BrowserModule,
    HttpModule,
    PipesModule,
    IonicModule.forRoot(MyApp, {
      activator: 'highlight',
      backButtonText:''
    }),
    SuperTabsModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    HttpProvider,
    NativeProvider
  ]
})
export class AppModule { }
