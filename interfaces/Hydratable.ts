export interface Hydratable<S> {
    hydrate: (data: S) => void;
}