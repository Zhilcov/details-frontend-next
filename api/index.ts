import axios, {AxiosRequestConfig, CancelTokenSource} from "axios";
import {defaultObjType} from "../types/defaultObjType";
import {methods} from "../enums/methods";
import cookie from "js-cookie";
import Response from "~/interfaces/Response";


type callApiRequest<P> = {
    endpoint: string;
    params?: P;
    method: methods;
    source?: CancelTokenSource;
};
export const callApi = async <P = defaultObjType, R = defaultObjType>({
                                                                          endpoint,
                                                                          params,
                                                                          method,
                                                                          source,
                                                                      }: callApiRequest<P>): Promise<Response<R>> => {
    const apiToken = cookie.get(process.env.authCookie);
    let config: AxiosRequestConfig = {
        url: `${process.env.apiUrl}/${endpoint}`,
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            ...(apiToken ? {Authorization: `Bearer ${apiToken}`} : {}),
        },
        method: method,
        cancelToken: source?.token,
    };

    if (method === methods.GET) {
        config = {...config, params: params};
    } else {
        config = {...config, data: params};
    }

    const result = await axios.request<Response<R>>(config);

    return result.data;
};