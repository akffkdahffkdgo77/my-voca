export function getLocalStorage(name: string) {
    if (localStorage.getItem(name)) {
        return JSON.parse(localStorage.getItem(name) as string);
    }

    return '';
}

export function setLocalStorage(name: string, value: unknown[]) {
    localStorage.setItem(name, JSON.stringify(value));
}

export function getWords() {
    return getLocalStorage('words') || [];
}
