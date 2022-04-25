// ==UserScript==
// @name         Open Instagram App
// @version      1.0.0
// @author       jimmyorz
// @match        *://*.instagram.com/*
// ==/UserScript==
window.location.href = `instagram://${window.location.pathname.slice(1)}${
	window.location.search
}${window.location.hash}`;
