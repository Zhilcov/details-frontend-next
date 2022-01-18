import {Hydratable} from "../interfaces/Hydratable";
export default function<S extends Hydratable<S>>(store: S, initialData = null): S {
    const _store = store;

    // If your page has Next.js data fetching methods that use a Mobx store, it will
    // get hydrated here, check `pages/ssg.js` and `pages/ssr.js` for more details
    if (initialData) {
        _store.hydrate(initialData)
    }
    // For SSG and SSR always create a new store
    if (typeof window === 'undefined') return _store

    return _store
}