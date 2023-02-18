var doleziteUrl = 'https://dennikn.sk/minuta/dolezite';
var minutaUrl = 'https://dennikn.sk/minuta';
var loadSite = '';

window.addEventListener('load', function() {
    chrome.storage.local.get(["defaultSite"]).then((result) => {
        loadSite = result.defaultSite;
        document.getElementById('iframeID').src = loadSite;
    });   
});