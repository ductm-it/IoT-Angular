import { Environment } from 'src/app/class/environment.class';


export const environment: Environment = {
	production: false,
	apiUrl: "https://api.iothub.it4u.top",
	dateFormat: "DD/MM/YYYY",

	stompConfig: {
		url: 'https://api.iothub.it4u.top/ws?token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJVMDAwMDAwMDEyIiwicm9sZUVudW0iOiJST0xFX0FETUlOIiwiaWF0IjoxNTkxMDgzMDMzLCJleHAiOjE2OTExNjk0MzN9.b1D4hJEQPqg4i9_V-cd2GycOBJwYHUeaikkg05YniOY',
		headers: {},
		heartbeat_in: 0,
		heartbeat_out: 20000,
		reconnect_delay: 2000,
		debug: false,
	}
};
