var docRef = db.collection("OCTOBER").doc("Http i9 Hero");
var iframe = document.getElementById("my-iframe");
var loadingIndicator = document.getElementById("loading-indicator");

// Show the loading indicator immediately after a short delay
setTimeout(function () {
    loadingIndicator.style.display = "flex";
}, 100);

function hideLoadingIndicator() {
    loadingIndicator.style.display = "none";
}

function setIframeSource(val, game) {
    if (val) {
        iframe.src = game;
    } else {
        iframe.src = "./dist/index.html";
    }
}

iframe.onload = function () {
    hideLoadingIndicator(); // Hide loading indicator when iframe is loaded
};

docRef.onSnapshot(function (doc) {
    if (doc.exists) {
        var data = doc.data();
        var val = data.value;
        var game = data.myGame;

        setIframeSource(val, game);
    } else {
        // Handle when the document doesn't exist
    }
}, function (error) {
    // Handle errors
});