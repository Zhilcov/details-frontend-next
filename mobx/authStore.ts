import { enableStaticRendering } from 'mobx-react-lite'
import {useMemo} from "react";
import initializeStore from "./initializeStore";
import {UserInterface} from "../interfaces/UserInterface";
import {Hydratable} from "../interfaces/Hydratable";
import {action, makeObservable, observable} from "mobx";
import {singIn} from "../api/auth";
import cookie from "js-cookie";

enableStaticRendering(typeof window === 'undefined')

export interface AuthStoreInterface extends Hydratable<AuthStoreInterface> {
    user: UserInterface | undefined,
    login: (login: string, password: string) => void;
}

class AuthStore implements AuthStoreInterface {
    @observable user: UserInterface | undefined;

    @action
    async login(login: string, password: string): Promise<void> {
        console.log(login);
        console.log(password);
        try {
            const {expireAt, accessToken, login} = await singIn(login, password);
            cookie.set(process.env.authCookie, accessToken, { expires: expireAt });

            this.user = {
                name: login
            }
        } catch (e) {
            console.log(e);
        }
    }

    @action
    hydrate(data: AuthStoreInterface): void {
        if (!data) return

        this.user = data.user;
    }



}

export function useAuthStore(): AuthStoreInterface {
    return useMemo(() => initializeStore(new AuthStore(), null), [])
}
