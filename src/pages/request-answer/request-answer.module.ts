import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RequestAnswerPage } from './request-answer';
import { PipesModule } from '../../pipes/pipes.module'

@NgModule({
  declarations: [
    RequestAnswerPage,
  ],
  imports: [
    IonicPageModule.forChild(RequestAnswerPage),
    PipesModule
  ],
  exports:[RequestAnswerPage]
})
export class RequestAnswerPageModule {}
