import {callApi} from "./index";
import {methods} from "~/enums/methods";

export const singIn = async (login: string, password: string) => {
    const res = await callApi<any, any>({
        endpoint: 'auth/sign-in',
        method: methods.POST,
        params: {
            login,
            password,
        },
    });
    console.log(res);
}