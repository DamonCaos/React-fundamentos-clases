type Storage = "auth" | "user";

const storage = {
    get(key: string) {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    },
    set(key: string, value: any) {
        localStorage.setItem(key, value)
    },
    remove(key: string) {
        localStorage.removeItem(key);
    },
    clear() {
        localStorage.clear();
    }
}

export default storage;