import { Injectable } from '@angular/core';

export enum SCREEN {
	//
	PUBLIC_HOME = "",
	PUBLIC_CONTACT = "contact",

	//
	PUBLIC_ERROR_404 = "**",

	//
	AUTH_HOME = "auth",
	AUTH_SIGNIN = "signin",
	AUTH_SIGNUP = "signup",

	//
	PRIVATE_HOME = "home",
	PRIVATE_DASHBOARD = "dashboard",
	PRIVATE_MESSAGE = "message",
	PRIVATE_SETTING = "setting",
	PRIVATE_CMS = "cms",
	PRIVATE_CMS_USER = "user",
	PRIVATE_CMS_ROLE = "role",
	//
	PRIVATE_CMS_IOT = "iot",
	PRIVATE_CMS_IOT_DEVICE = "device",
	PRIVATE_CMS_IOT_DEVICE_TYPE = "device-type",
	PRIVATE_CMS_IOT_DEVICE_ATTRIBUTE = "device-attribute",
	PRIVATE_CMS_IOT_TOKEN = "token",
	PRIVATE_CMS_IOT_TRIGGER = "trigger",
	PRIVATE_CMS_IOT_VARIABLE = "variable",
	PRIVATE_CMS_IOT_VARIABLE_VALUE = "variable-value",
}

@Injectable()
export class UrlService {

	public static INSTANCE = new UrlService();

	// ============================================================================================================
	private public(screen?: SCREEN): string {
		return screen ? `/${screen}` : "";
	}

	get publicHome(): string {
		return this.public();
	}

	get publicContact(): string {
		return this.public(SCREEN.PUBLIC_CONTACT);
	}

	get publicError404(): string {
		return this.public(SCREEN.PUBLIC_ERROR_404);
	}

	// ============================================================================================================
	get privateHome(): string {
		return `${this.publicHome}/${SCREEN.PRIVATE_HOME}`;
	}

	private private(screen?: SCREEN): string {
		return `${this.privateHome}${screen ? ('/' + screen) : ''}`;
	}

	get privateDashboard(): string {
		return this.private(SCREEN.PRIVATE_DASHBOARD);
	}

	get privateMessage(): string {
		return this.private(SCREEN.PRIVATE_MESSAGE);
	}

	get privateSetting(): string {
		return this.private(SCREEN.PRIVATE_SETTING);
	}

	get privateCms(): string {
		return this.private(SCREEN.PRIVATE_CMS);
	}

	get privateCmsUser() {
		return `${this.private(SCREEN.PRIVATE_CMS)}/${SCREEN.PRIVATE_CMS_USER}`;
	}

	get privateCmsRole() {
		return `${this.private(SCREEN.PRIVATE_CMS)}/${SCREEN.PRIVATE_CMS_ROLE}`;
	}

	// ============================================================================================================
	get privateCmsHome(): string {
		return `${this.privateHome}/${SCREEN.PRIVATE_CMS}`;
	}

	private privateCmsIot(screen?: SCREEN): string {
		return `${this.privateCmsHome}/${SCREEN.PRIVATE_CMS_IOT}${screen ? ('/' + screen) : ''}`;
	}

	get privateCmsIotDevice() {
		return `${this.privateCmsIot(SCREEN.PRIVATE_CMS_IOT_DEVICE)}`;
	}

	get privateCmsIotDeviceType() {
		return `${this.privateCmsIot(SCREEN.PRIVATE_CMS_IOT_DEVICE_TYPE)}`;
	}

	get privateCmsIotDeviceAttribute() {
		return `${this.privateCmsIot(SCREEN.PRIVATE_CMS_IOT_DEVICE_ATTRIBUTE)}`;
	}

	get privateCmsIotToken() {
		return `${this.privateCmsIot(SCREEN.PRIVATE_CMS_IOT_TOKEN)}`;
	}

	get privateCmsIotTrigger() {
		return `${this.privateCmsIot(SCREEN.PRIVATE_CMS_IOT_TRIGGER)}`;
	}

	get privateCmsIotVariable() {
		return `${this.privateCmsIot(SCREEN.PRIVATE_CMS_IOT_VARIABLE)}`;
	}

	get privateCmsIotVariableValue() {
		return `${this.privateCmsIot(SCREEN.PRIVATE_CMS_IOT_VARIABLE_VALUE)}`;
	}

	// ============================================================================================================
	private auth(screen?: SCREEN): string {
		return `${this.publicHome}/${SCREEN.AUTH_HOME}${screen ? ('/' + screen) : ''}`;
	}

	get authSignin() {
		return `${this.auth(SCREEN.AUTH_SIGNIN)}`;
	}

	get authSignup() {
		return `${this.auth(SCREEN.AUTH_SIGNUP)}`;
	}

}
