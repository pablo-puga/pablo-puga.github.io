import { writable } from 'svelte/store';

const GA_TRACKING_ID = 'G-F4YTG3EY7B';

const createCookieStore = () => {
    const initialCookieConsent = (val => {
        if (val === null || val === undefined) return undefined;
        if (val.toLocaleLowerCase() === 'true') return true;
        return false;
    })(localStorage.getItem('cookie-consent'));
    const { subscribe, set } = writable(initialCookieConsent);

    return {
        subscribe,
        accept: cb => {
            localStorage.setItem('cookie-consent', 'true');
            window[`ga-disable-${GA_TRACKING_ID}`] = false;
            if (window.gtag) {
                window.gtag('consent', 'update', {
                    'analytics_storage': 'granted',
                });
            }
            set(true);
        },
        decline: cb => {
            localStorage.setItem('cookie-consent', 'false');
            if (window.dataLayer && Array.isArray(window.dataLayer)) window.dataLayer = [];
            window[`ga-disable-${GA_TRACKING_ID}`] = true;
            if (window.gtag) {
                window.gtag('consent', 'update', {
                    'analytics_storage': 'denied',
                });
            }
            document.cookie = GA_TRACKING_ID.replace('G-', '_ga_') +`=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT`;
            document.cookie = '_ga=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT';
            set(false);
            window.location.reload();
        },
    };
};

export const cookieConsent = createCookieStore();
