export function updateUrlParam (param, value) {
    const url = new URL(window.location.href);
    url.searchParams.set(param, `${value}`);
    window.history.replaceState(null, null, url); 
}

export function getUrlParam (param) {
    const url = new URL(window.location.href);
    return url.searchParams.get(param);
}

export function getLastSegment (location) {
    return location.pathname.slice(location.pathname.lastIndexOf("/") + 1 , location.pathname.length);
}