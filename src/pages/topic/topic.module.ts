import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TopicPage } from './topic';
import { PipesModule } from '../../pipes/pipes.module'

@NgModule({
  declarations: [
    TopicPage,
    
  ],
  imports: [
    IonicPageModule.forChild(TopicPage),
    PipesModule
  ],
})
export class TopicPageModule { }
