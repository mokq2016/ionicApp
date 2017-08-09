import { NgModule } from '@angular/core'
import { IonicPageModule } from 'ionic-angular'

import { CreamRequestPage } from './cream-request'

@NgModule({
    declarations:[CreamRequestPage],
    imports:[IonicPageModule.forChild(CreamRequestPage)],
    exports:[CreamRequestPage]
})
export class CreamRquestPageModule { }