import { NgModule } from '@angular/core'
import { IonicPageModule } from 'ionic-angular'

import { AllRequestPage } from './all-request'

@NgModule({
    declarations: [AllRequestPage],
    imports: [IonicPageModule.forChild(AllRequestPage)],
    exports:[AllRequestPage]
})
export class AllRequestPageModule { }