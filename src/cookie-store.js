import { writable } from 'svelte/store';

const createCookieStore = () => {
    const initialCookieConsent = (val => {
        if (val === null || val === undefined) return undefined;
        if (val.toLocaleLowerCase() === 'true') return true;
        return false;
    })(localStorage.getItem('cookie-consent'));
    const { subscribe, set } = writable(initialCookieConsent);

    return {
        subscribe,
        accept: () => {
            localStorage.setItem('cookie-consent', 'true');
            set(true);
        },
        decline: () => {
            localStorage.setItem('cookie-consent', 'false');
            set(false);
        },
    };
};

export const cookieConsent = createCookieStore();