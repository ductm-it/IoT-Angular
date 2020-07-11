import { NgModule } from "@angular/core";
import { PublicFooterTopComponent } from './footer-top/footer-top.component';
import { PublicFooterMiddleComponent } from './footer-middle/footer-middle.component';
import { PublicFooterBottomComponent } from './footer-bottom/footer-bottom.component';
import { PublicFooterComponent } from './footer.component';
import { SubscribeModule } from '../../../module/form/subscribe/subcribe-form.module';
import { SocialAreaModule } from 'src/app/module/area/social/social-area.module';


@NgModule({
	declarations: [
		PublicFooterTopComponent,
		PublicFooterMiddleComponent,
		PublicFooterBottomComponent,

		PublicFooterComponent,
	],
	imports: [
		SubscribeModule,
		SocialAreaModule,
	],
	exports: [
		PublicFooterComponent,
	]
})
export class PublicFooterModule {

}
