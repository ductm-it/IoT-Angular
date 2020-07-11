import { FormControl } from '@angular/forms';

export class CommonValidator {

	public static Size(param: { min: number, max: number }, message: string) {
		return (formControl: FormControl) => {
			const value: string = formControl.value;
			if (value === null || value === undefined) return null;
			return value.length < param.min || value.length > param.max ? { Size: message } : null;
		}
	}

	public static Email(param: { param: string }, message: string) {
		return (formControl: FormControl) => {
			const value: string = formControl.value;
			if (value === null || value === undefined || value === "") return null;
			return new RegExp(param.param).test(value) ? null : { Email: message };
		}
	}

	public static Phone(param: { param: string }, message: string) {
		return (formControl: FormControl) => {
			const value: string = formControl.value;
			if (value === null || value === undefined) return null;
			return new RegExp(param.param).test(value) ? null : { Phone: message };
		}
	}

	public static SqlId(param: { param: string }, message: string) {
		return (formControl: FormControl) => {
			const value: string = formControl.value;
			if (value === null || value === undefined) return null;
			return new RegExp(param.param).test(value) ? null : { SqlId: message };
		}
	}

	public static NotNull(_: any, message: string) {
		return (formControl: FormControl) => {
			const value: any = formControl.value;
			return (value === null || value === undefined) ? { NotNull: message } : null;
		}
	}

	public static NotBlank(_: any, message: string) {
		return (formControl: FormControl) => {
			const value: string = formControl.value;
			if (value === null || value === undefined) return null;
			return value.trim().length == 0 ? { NotBlank: message } : null;
		}
	}

	public static Username(param: { param: string }, message: string) {
		return (formControl: FormControl) => {
			const value: string = formControl.value;
			if (value === null || value === undefined || value === "") return null;
			return new RegExp(param.param).test(value) ? null : { Username: message };
		}
	}

	public static AssertTrue(_: any, message: string) {
		return (formControl: FormControl) => {
			const value: boolean = formControl.value;
			if (value == null) return null;
			return value == true ? null : { AssertTrue: message };
		}
	}

	public static EntityFieldName(param: { param: string }, message: string) {
		return (formControl: FormControl) => {
			const value: string = formControl.value;
			if (value === null || value === undefined || value === "") return null;
			return new RegExp(param.param).test(value) ? null : { EntityFieldName: message };
		}
	}

	public static FileSize(param: { param: number }, message: string) {
		return (formControl: FormControl) => {
			const value: number = formControl.value;
			if (value === null || value === undefined) return null;
			return param.param >= value ? null : { FileSize: message };
		}
	}

	public static FilterValue(param: { param: string }, message: string) {
		return (formControl: FormControl) => {
			const value: string = formControl.value;
			if (value === null || value === undefined || value === "") return null;
			return new RegExp(param.param).test(value) ? null : { FilterValue: message };
		}
	}

	public static Max(param: { param: number }, message: string) {
		return (formControl: FormControl) => {
			const value: number = formControl.value;
			if (value === null || value === undefined) return null;
			return param.param >= value ? null : { Max: message };
		}
	}

	public static Min(param: { param: number }, message: string) {
		return (formControl: FormControl) => {
			const value: number = formControl.value;
			if (value === null || value === undefined) return null;
			return param.param <= value ? null : { Min: message };
		}
	}

	public static Negative(_: any, message: string) {
		return (formControl: FormControl) => {
			const value: number = formControl.value;
			if (value === null || value === undefined) return null;
			return value < 0 ? null : { Negative: message };
		}
	}

	public static NegativeOrZero(_: any, message: string) {
		return (formControl: FormControl) => {
			const value: number = formControl.value;
			if (value === null || value === undefined) return null;
			return value <= 0 ? null : { NegativeOrZero: message };
		}
	}

	public static Positive(_: any, message: string) {
		return (formControl: FormControl) => {
			const value: number = formControl.value;
			if (value === null || value === undefined) return null;
			return value > 0 ? null : { Positive: message };
		}
	}

	public static PositiveOrZero(_: any, message: string) {
		return (formControl: FormControl) => {
			const value: number = formControl.value;
			if (value === null || value === undefined) return null;
			return value >= 0 ? null : { PositiveOrZero: message };
		}
	}

	public static Regexp(param: { param: string }, message: string) {
		return (formControl: FormControl) => {
			const value: string = formControl.value;
			if (value === null || value === undefined || value === "") return null;
			return new RegExp(param.param).test(value) ? null : { Regexp: message };
		}
	}

	public static ListValue(param: { param: string[] }, message: string) {
		return (formControl: FormControl) => {
			const value: Object = formControl.value;
			if (value === null || value === undefined) return null;
			return param.param.includes(value.toString()) ? null : { ListValue: message };
		}
	}

	public static Future(_: any, message: string) {
		return (formControl: FormControl) => {
			const value: Date = formControl.value;
			if (value === null || value === undefined) return null;
			return value > new Date() ? null : { Future: message };
		}
	}

	public static FutureOrPresent(_: any, message: string) {
		return (formControl: FormControl) => {
			const value: Date = formControl.value;
			if (value === null || value === undefined) return null;
			return value >= new Date() ? null : { FutureOrPresent: message };
		}
	}

	public static Past(_: any, message: string) {
		return (formControl: FormControl) => {
			const value: Date = formControl.value;
			if (value === null || value === undefined) return null;
			return value < new Date() ? null : { Past: message };
		}
	}

	public static PastOrPresent(_: any, message: string) {
		return (formControl: FormControl) => {
			const value: Date = formControl.value;
			if (value === null || value === undefined) return null;
			return value <= new Date() ? null : { PastOrPresent: message };
		}
	}

	public static Password(param: { param: string }, message: string) {
		return (formControl: FormControl) => {
			const value: string = formControl.value;
			if (value === null || value === undefined || value === "") return null;
			return new RegExp(param.param).test(value) ? null : { Password: message };
		}
	}

	public static NotEmpty(_: any, message: string) {
		return (formControl: FormControl) => {
			const value: string[] = formControl.value;
			if (value === null || value === undefined) return null;
			return value.length == 0 ? { NotEmpty: message } : null;
		}
	}

}
