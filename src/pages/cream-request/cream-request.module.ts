import { NgModule } from '@angular/core'
import { IonicPageModule } from 'ionic-angular'

import { CreamRequestPage } from './cream-request'
import { PipesModule } from '../../pipes/pipes.module'

@NgModule({
    declarations:[CreamRequestPage],
    imports:[IonicPageModule.forChild(CreamRequestPage),PipesModule],
    exports:[CreamRequestPage]
})
export class CreamRquestPageModule { }