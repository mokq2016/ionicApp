import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecruitPage } from './recruit';

@NgModule({
  declarations: [
    RecruitPage,
  ],
  imports: [
    IonicPageModule.forChild(RecruitPage),
  ],
  exports:[RecruitPage]
})
export class RecruitPageModule {}
