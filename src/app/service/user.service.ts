import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { UserDetail } from '../class/user-detail.class';
import { Role as _Role } from '../directive/role.module';

export interface RoleEntity {
	[key: string]: number
}

enum PAYLOAD {
	USER_CODE = "sub",
	USER_TYPE = "a"
}

export interface Payload {
	[key: string]: any,
	iat: number,
	exp: number
}

export function b64DecodeUnicode(str) {
	return decodeURIComponent(
		Array.prototype.map.call(atob(str), c =>
			'%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
		).join(''));
}

export function parseJwt(token) {
	return JSON.parse(
		b64DecodeUnicode(
			token.split('.')[1].replace('-', '+').replace('_', '/')
		)
	);
}

@Injectable()
export class UserService {

	private static tokenKey: string = "w-token";
	private _role: RoleEntity;
	private _payload: Payload;
	private _userDetail: UserDetail = {};
	private onUpdate: Subject<any> = new Subject();

	get onUpdate$(): Observable<number> {
		return this.onUpdate.asObservable();
	}

	fireUpdate() {
		this.onUpdate.next();
	}

	get token() {
		return localStorage.getItem(UserService.tokenKey);
	}

	set token(token: string) {
		localStorage.setItem(UserService.tokenKey, token);
		this.onUpdate.next();
	}

	signout() {
		localStorage.removeItem(UserService.tokenKey);
		this._userDetail = {};
		this.onUpdate.next();
	}

	get signed() {
		const token = this.token;
		if (token) {
			try {
				let payload = parseJwt(token);
				if (payload.exp * 1000 <= (new Date()).getTime()) {
					return false;
				} else {
					this._payload = payload;
					return true;
				}
			} catch (ex) {
				console.log(ex);
				return false;
			}
		} else {
			return false;
		}
	}

	get info(): UserDetail {
		return this._userDetail;
	}

	set info(userDetail: UserDetail) {
		this._userDetail = userDetail;
	}

	get role(): RoleEntity {
		return this._role;
	}

	set role(role: RoleEntity) {
		this._role = role;
	}

	validRole(args: _Role[]): boolean {
		console.log(args);
		return true;
	}

	get payload(): Payload {
		return this._payload;
	}

	get userCode(): string {
		return this.payload[PAYLOAD.USER_CODE];
	}

	get userRole(): string {
		return this.payload[PAYLOAD.USER_TYPE];
	}

}
