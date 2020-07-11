import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StompConfig, StompRService } from '@stomp/ng2-stompjs';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { ToastrModule } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScreenSizeModule, ScreenSizeService } from './directive/screen-size.module';
import { AuthGaurd } from './gaurd/auth.gaurd';
import { MobileMenuModule } from './module/area/mobile-menu/mobile-menu.module';
import { FormModule } from './module/input/form.module';
import { BottomPopupComponent } from './module/popup/bottom/bottom-popup.component';
import { ApiService } from './service/api.service';
import { UrlService } from './service/url.service';
import { UserService } from './service/user.service';
import { WindowRefService } from './service/window-ref.service';
import { MessageService } from './service/message.service';
import { AppService } from './service/app.service';
import { ErrorService } from './service/error.service';

@NgModule({
	declarations: [
		AppComponent,
		BottomPopupComponent,
	],
	imports: [
		BrowserModule.withServerTransition({ appId: 'serverApp' }),
		AppRoutingModule,
		BrowserAnimationsModule,
		FormModule,
		ToastrModule.forRoot({
			positionClass: "toast-bottom-right",
			timeOut: 10000
		}),
		MatBottomSheetModule,
		HttpClientModule,
		NgxDaterangepickerMd,
		ScreenSizeModule,
		MobileMenuModule,
	],
	providers: [
		AppService,
		WindowRefService,
		UserService,
		{
			provide: UrlService,
			useValue: UrlService.INSTANCE
		},
		ApiService,
		ScreenSizeService,

		AuthGaurd,
		MessageService,
		StompRService,
		ErrorService,
	],
	bootstrap: [
		AppComponent
	],
	entryComponents: [
		BottomPopupComponent,
	]
})
export class AppModule { }
