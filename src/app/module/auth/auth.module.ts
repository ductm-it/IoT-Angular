import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';
import { ScreenSizeModule } from 'src/app/directive/screen-size.module';
import { PublicLayoutModule } from 'src/app/layout/public/public-layout.module';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { AuthSigninComponent } from './signin/signin.component';
import { AuthSignupComponent } from './signup/signup.component';


@NgModule({
	declarations: [
		AuthComponent,
		AuthSigninComponent,
		AuthSignupComponent,
	],
	imports: [
		CommonModule,
		RouterModule,
		ReactiveFormsModule,
		PublicLayoutModule,
		AuthRoutingModule,
		ScreenSizeModule,
		SocialLoginModule,
	],
	exports: [

	],
	providers: [
		{
			provide: 'SocialAuthServiceConfig',
			useValue: {
				autoLogin: false,
				providers: [
					{
						id: GoogleLoginProvider.PROVIDER_ID,
						provider: new GoogleLoginProvider(
							'246423802421-lmo4kjbkub9tjpins1jnkci866c6ivg0.apps.googleusercontent.com'
						),
					},
					{
						id: FacebookLoginProvider.PROVIDER_ID,
						provider: new FacebookLoginProvider('197137171515952'),
					}
				],
			} as SocialAuthServiceConfig,
		}
	]
})
export class AuthModule {

}
