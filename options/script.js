$( document ).ready(function() {
    document.getElementById("setSite").onchange = function(evt){
        var value = evt.target.value;
        chrome.storage.local.set({'defaultSite': value});
    };
}); 
window.addEventListener('load', function() {
    chrome.storage.local.get(["defaultSite"]).then((result) => {
        loadSite = result.defaultSite;
        $("#setSite").val(loadSite).change();
    });   
});