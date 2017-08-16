import { NgModule } from '@angular/core'
import { IonicPageModule } from 'ionic-angular'

import { AllRequestPage } from './all-request'
import { PipesModule } from '../../pipes/pipes.module'

@NgModule({
    declarations: [AllRequestPage],
    imports: [IonicPageModule.forChild(AllRequestPage),PipesModule  ],
    exports: [AllRequestPage]
})
export class AllRequestPageModule { }