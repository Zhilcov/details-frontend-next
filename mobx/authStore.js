import { action, observable, computed, runInAction, makeObservable } from 'mobx'
import { enableStaticRendering } from 'mobx-react-lite'
import {useMemo} from "react";
import initializeStore from "./initializeStore";
import axios from "axios";

enableStaticRendering(typeof window === 'undefined')

class AuthStore {
    user;

    constructor() {
        makeObservable(this, {
            user: observable,
        })
    }

    login = async () => {
        await axios.get('https://random-data-api.com/api/stripe/random_stripe');
        this.user = {
            name: 'dfsdfsf'
        }
    }

    get timeString() {
        const pad = (n) => (n < 10 ? `0${n}` : n)
        const format = (t) =>
            `${pad(t.getUTCHours())}:${pad(t.getUTCMinutes())}:${pad(
                t.getUTCSeconds()
            )}`
        return format(new Date(this.lastUpdate))
    }

    stop = () => clearInterval(this.timer)

    hydrate = (data) => {
        if (!data) return

        this.user = data.user;
    }
}

const authStoreInitialState = {

};

export function useAuthStore() {
    return useMemo(() => initializeStore(new AuthStore(), authStoreInitialState), [])
}
