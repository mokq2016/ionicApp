import { NgModule } from '@angular/core';
import { FormatDatePipe } from './format-date/format-date';
import { MyPipe } from './my/my';
@NgModule({
	declarations: [FormatDatePipe,
    MyPipe],
	imports: [],
	exports: [FormatDatePipe,
    MyPipe]
})
export class PipesModule {}
