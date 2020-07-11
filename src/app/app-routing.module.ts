import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './module/auth/auth.module';
import { ErrorModule } from './module/error/error.module';
import { PrivateModule } from './module/private/private.module';
import { PublicModule } from './module/public/public.module';
import { SCREEN } from './service/url.service';
import { AuthGaurd } from './gaurd/auth.gaurd';


const routes: Routes = [
	{ path: SCREEN.PUBLIC_HOME, loadChildren: () => PublicModule },
	{ path: SCREEN.PRIVATE_HOME, loadChildren: () => PrivateModule, canActivate: [AuthGaurd] },
	{ path: SCREEN.AUTH_HOME, loadChildren: () => AuthModule },
	{ path: "**", loadChildren: () => ErrorModule }
];

@NgModule({
	imports: [RouterModule.forRoot(routes, {
		initialNavigation: 'enabled'
	})],
	exports: [RouterModule]
})
export class AppRoutingModule { }
