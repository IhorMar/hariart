export function updateUrlParam (param, value) {
    const url = new URL(window.location.href);
    url.searchParams.set(param, `${value}`);
    window.history.replaceState(null, null, url); 
}

export function getUrlParam (param) {
    const url = new URL(window.location.href);
    return url.searchParams.get(param);
}