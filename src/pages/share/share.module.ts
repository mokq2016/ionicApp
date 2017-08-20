import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SharePage } from './share';
import { PipesModule } from '../../pipes/pipes.module'
@NgModule({
  declarations: [
    SharePage,
  ],
  imports: [
    IonicPageModule.forChild(SharePage),
    PipesModule
  ],
  exports:[SharePage]
})
export class SharePageModule {}
