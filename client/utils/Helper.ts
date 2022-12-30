

// generate random unique uuid


export function generateUUID() {
    // Public Domain/MIT
    let d = new Date().getTime();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
        d += performance.now(); //use high-precision timer if available
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

// localStorage helper functions
export class LocalStorageHelper {
    // set item to localStorage
    static setItem<T>(key: string, value: T): void {
        localStorage.setItem(key, JSON.stringify(value));

    }

    // get item from localStorage
    static getItem<T>(key: string): T | null {
        const item = localStorage.getItem(key);
        if (item) {
            return JSON.parse(item);
        }
        return null;
    }
}

// env helper functions
