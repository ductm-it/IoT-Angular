import { HttpClient } from '@angular/common/http';
import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PrivateService } from '../module/private/private.service';
import { UserService } from '../service/user.service';

@Pipe({
	name: 'secure'
})
export class SecurePipe implements PipeTransform {

	constructor(private http: HttpClient, private sanitizer: DomSanitizer, private privateService: PrivateService, private userService: UserService) { }

	transform(url: string): Observable<SafeUrl> {
		return this.http
			.get(url, { responseType: 'blob', headers: { 'Authorization': 'Bearer ' + this.userService.token } })
			.pipe(map(val => this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(val))));
	}

}


@NgModule({
	declarations: [SecurePipe],
	imports: [],
	exports: [SecurePipe],
})
export class SecurePipeModule { }
