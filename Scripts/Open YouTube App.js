// ==UserScript==
// @name         Open YouTube App
// @version      1.0.0
// @author       asportnoy
// @match        *://*.youtube.com/*
// @downloadURL  https://gist.github.com/asportnoy/628b820184297f5fe296c1a5b79c8000/raw/
// @updateURL  https://gist.github.com/asportnoy/628b820184297f5fe296c1a5b79c8000/raw/
// @homepage    https://gist.github.com/asportnoy/628b820184297f5fe296c1a5b79c8000/
// ==/UserScript==
window.location.href = `youtube://${window.location.pathname.slice(1)}${
	window.location.search
}${window.location.hash}`;
