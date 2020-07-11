import { NgModule } from "@angular/core";
import { ScreenSizeModule } from 'src/app/directive/screen-size.module';
import { PublicLayoutModule } from 'src/app/layout/public/public-layout.module';
import { HomeCategoryAreaModule } from '../area/home-category/home-category-area.module';
import { PlanAreaModule } from '../area/plan/plan-area.module';
import { PublicContactComponent } from './contact/contact.component';
import { PublicHomeComponent } from './home/home.component';
import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { PublicService } from './public.service';

@NgModule({
	declarations: [
		PublicComponent,
		PublicHomeComponent,
		PublicContactComponent,
	],
	imports: [
		PublicLayoutModule,
		PublicRoutingModule,
		ScreenSizeModule,

		PlanAreaModule,
		HomeCategoryAreaModule,
	],
	exports: [

	],
	providers: [
		PublicService
	]
})
export class PublicModule {

}
