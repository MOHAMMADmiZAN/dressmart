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

// random id generator
export function generateId() {
    return Math.floor(Math.random() * 1000000);
}


// sanitize id type if unknown
export function sanitizeId(id: unknown): number {
    return typeof id === "string" ? parseInt(id) : id as number;


}