import { NgModule } from "@angular/core";
import { PublicSmallFooterComponent } from './small-footer.component';
import { SocialAreaModule } from 'src/app/module/area/social/social-area.module';


@NgModule({
	declarations: [
		PublicSmallFooterComponent,
	],
	imports: [
		SocialAreaModule,
	],
	exports: [
		PublicSmallFooterComponent,
	]
})
export class PublicSmallFooterModule {

}
