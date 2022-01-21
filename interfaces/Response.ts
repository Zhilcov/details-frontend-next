import {defaultObjType} from "~/types/defaultObjType";

export default interface Response<R = defaultObjType> {
    success: boolean;
    error?: string;
    errorCode?: string;
    response: R;
}