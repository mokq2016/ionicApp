import { NgModule } from '@angular/core'
import { IonicPageModule } from 'ionic-angular'

import { AllRequestPage } from './all-request'
import { FormatDatePipe } from '../../pipes/format-date/format-date'

@NgModule({
    declarations: [AllRequestPage, FormatDatePipe],
    imports: [IonicPageModule.forChild(AllRequestPage)],
    exports: [AllRequestPage]
})
export class AllRequestPageModule { }