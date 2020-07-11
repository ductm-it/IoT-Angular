import { NgModule } from "@angular/core";
import { PublicLayoutModule } from 'src/app/layout/public/public-layout.module';
import { ErrorRoutingModule } from './error-routing.module';
import { ErrorComponent } from './error.component';

@NgModule({
	declarations: [
		ErrorComponent,
	],
	imports: [
		PublicLayoutModule,
		ErrorRoutingModule,
	],
	exports: [

	]
})
export class ErrorModule {

}
