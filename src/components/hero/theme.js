// Current foreground color, read from the --fg CSS variable so the canvases
// follow the same palette as the rest of the site.
export const foregroundColor = () =>
    getComputedStyle(document.documentElement).getPropertyValue('--fg').trim() || '#f0f0f0';

export const observeTheme = (callback) => {
    const observer = new MutationObserver(callback);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
};
