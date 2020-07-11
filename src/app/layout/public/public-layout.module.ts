import { NgModule } from "@angular/core";
import { PublicFooterModule } from './footer/footer.module';
import { PublicHeaderModule } from './header/header.module';

@NgModule({
	declarations: [

	],
	imports: [
		PublicFooterModule,
		PublicHeaderModule,
	],
	exports: [
		PublicFooterModule,
		PublicHeaderModule,
	]
})
export class PublicLayoutModule {

}
