import { NgModule } from "@angular/core";
import { PrivateFooterComponent } from './footer.component';
import { SocialAreaModule } from 'src/app/module/area/social/social-area.module';


@NgModule({
	declarations: [
		PrivateFooterComponent,
	],
	imports: [
		SocialAreaModule,
	],
	exports: [
		PrivateFooterComponent,
	]
})
export class PrivateFooterModule {

}
