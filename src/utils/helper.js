import React, {useRef, useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom';

////////////////////////////////////////////////////////////////////
// HOOKS
////////////////////////////////////////////////////////////////////

// Custom hook to allow navbar scroll to page and specific locatino
// Even from external pages
export function useScrollLocation(){
    const location = useLocation()
    useEffect(()=> {
        if (location.hash) {
            let elem = document.getElementById(location.hash.slice(1))
            if (elem) {
                elem.scrollIntoView({behavior: "smooth"})
            }
        } else {
        window.scrollTo({top:0,left:0, behavior: "smooth"})
        }
    }, [location,])
}
export function useFuncDelay(func, val, time){
    useEffect(() => {
        setTimeout(() => {
        func(val)
        }, time)
    }, [])
}
export function useLockScroll(lock){
    lock?document.body.style.overflow = "hidden":document.body.style.overflow = "auto";
}




////////////////////////////////////////////////////////////////////
// UTILITY FUNCTIONS
////////////////////////////////////////////////////////////////////

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

// export default function scrollingFromAbove(entry){
//     if (!entry) return false;
//     return entry.boundingClientRect.y >= entry.rootBounds.y;
// }

// Code learned from geeksforgeek
export function detectBrowser(){
    // Get the user-agent string
    let userAgentString = 
        navigator.userAgent;
   
        // Detect Chrome
   let chromeAgent = 
   userAgentString.indexOf("Chrome") > -1;

    // Detect Internet Explorer
    let IExplorerAgent = 
    userAgentString.indexOf("MSIE") > -1 || 
    userAgentString.indexOf("rv:") > -1;

    // Detect Firefox
    let firefoxAgent = 
    userAgentString.indexOf("Firefox") > -1;

    // Detect Safari
    let safariAgent = 
    userAgentString.indexOf("Safari") > -1;
        
    // Discard Safari since it also matches Chrome
    if ((chromeAgent) && (safariAgent)) 
    safariAgent = false;

    // Detect Opera
    let operaAgent = 
    userAgentString.indexOf("OP") > -1;
        
    // Discard Chrome since it also matches Opera     
    if ((chromeAgent) && (operaAgent)) 
    chromeAgent = false;

    if (chromeAgent) return 'Chrome';
    if (safariAgent) return 'Safari';
    if (firefoxAgent) return 'Firefox';
    if (operaAgent) return 'Opera';
}
      
     
 