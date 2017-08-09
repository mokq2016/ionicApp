import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RequestAnswerPage } from './request-answer';

@NgModule({
  declarations: [
    RequestAnswerPage,
  ],
  imports: [
    IonicPageModule.forChild(RequestAnswerPage),
  ],
  exports:[RequestAnswerPage]
})
export class RequestAnswerPageModule {}
