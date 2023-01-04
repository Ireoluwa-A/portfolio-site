export function waitForElementToDisplay(selector, callback, checkFrequencyInMs, timeoutInMs) {
    var startTimeInMs = Date.now();
    (function loopSearch() {
        if (document.getElementById(selector) != null) {
        callback();
        return;
        }
        else {
        setTimeout(function () {
            if (timeoutInMs && Date.now() - startTimeInMs > timeoutInMs)
            return;
            loopSearch();
        }, checkFrequencyInMs);
        }
    })();
}


