import React, {useRef, useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom';

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
