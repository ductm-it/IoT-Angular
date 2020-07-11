import { NgModule } from "@angular/core";
import { PrivateFooterModule } from './footer/footer.module';
import { PrivateHeaderModule } from './header/header.module';
import { PrivateSidebarModule } from './sidebar/sidebar.module';

@NgModule({
	declarations: [

	],
	imports: [
		PrivateFooterModule,
		PrivateHeaderModule,
		PrivateSidebarModule,
	],
	exports: [
		PrivateFooterModule,
		PrivateHeaderModule,
		PrivateSidebarModule,
	]
})
export class PrivateLayoutModule {

}
