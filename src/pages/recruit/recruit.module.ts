import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecruitPage } from './recruit';
import { PipesModule } from '../../pipes/pipes.module'

@NgModule({
  declarations: [
    RecruitPage,
  ],
  imports: [
    IonicPageModule.forChild(RecruitPage),
    PipesModule
  ],
  exports:[RecruitPage]
})
export class RecruitPageModule {}
