import { enableStaticRendering } from 'mobx-react-lite'
import {useMemo} from "react";
import initializeStore from "./initializeStore";
import {UserInterface} from "../interfaces/UserInterface";
import {Hydratable} from "../interfaces/Hydratable";
import {makeObservable, observable} from "mobx";

enableStaticRendering(typeof window === 'undefined')

export interface AuthStoreInterface extends Hydratable<AuthStoreInterface> {
    user: UserInterface | undefined,
    login: (login: string, password: string) => void;
}

class AuthStore implements AuthStoreInterface {
    user: UserInterface | undefined;

    constructor() {
        makeObservable(this, {
            user: observable,
        })
    }

    login(login: string, password: string): void {

    }

    hydrate(data: AuthStoreInterface): void {
        if (!data) return

        this.user = data.user;
    }



}

export function useAuthStore(): AuthStoreInterface {
    return useMemo(() => initializeStore(new AuthStore(), null), [])
}
