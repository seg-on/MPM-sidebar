var loadSite = '';

window.addEventListener('load', function() {
    chrome.storage.local.get(["defaultSite"]).then((result) => {
        if (!result.defaultSite) {
            loadSite = 'https://dennikn.sk/minuta';
            window.open("/options/options.html");
        } else {
            loadSite = result.defaultSite;
        }
        document.getElementById('iframeID').src = loadSite;
    });   
});