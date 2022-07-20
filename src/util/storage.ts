export class Storages {
    private static _storage: Storage | null;
    static set(key: string, value: string) {
        this.storage?.setItem(key, value);
    }
    static get(key: string) {
        return this.storage?.getItem(key);
    }

    static get storage() {
        if (this._storage === null) {
            this._storage = localStorage
        }
        return this._storage;
    }
}