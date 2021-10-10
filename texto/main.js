var dynamicManifest = {
    "name": "My Web Profile",
    "short_name": "My Web Profile",
    "description": "My Web Profile",
    "start_url": "https://index.html",
    "background_color": "#000000",
    "theme_color": "#0f4a73",
    "icons": [{
        "src": "https://vcard-bucket.s3.us-east-2.amazonaws.com/A34/32/1595946542514.jpeg",
        "sizes": "256x256",
        "type": "image/png"
    }],
    "display": "standalone"
}
const stringManifest = JSON.stringify(dynamicManifest);
const blob = new Blob([stringManifest], {
    type: 'application/json'
});
const manifestURL = URL.createObjectURL(blob);
document.querySelector('#manifest-placeholder').setAttribute('href', manifestURL);


function ColorLuminance(hex, lum) {
    // validate hex string
    hex = String(hex).replace(/[^0-9a-f]/gi, '');
    if (hex.length < 6) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    lum = lum || 0;

    // convert to decimal and change luminosity
    var rgb = "#",
        c, i;
    for (i = 0; i < 3; i++) {
        c = parseInt(hex.substr(i * 2, 2), 16);
        c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
        rgb += ("00" + c).substr(c.length);
    }

    return rgb;
}
document.documentElement.style.setProperty('--theme-color', '#183d6b');
document.documentElement.style.setProperty('--theme-color-light', '#333');
document.documentElement.style.setProperty('--theme-color-100', '#aa00ff');
document.documentElement.style.setProperty('--theme-color-75', '#aa00ff90');
document.documentElement.style.setProperty('--theme-color-50', '#aa00ff80');
document.documentElement.style.setProperty('--theme-color-25', '#aa00ff70');
window.cardId = 'my-web-profile-6';