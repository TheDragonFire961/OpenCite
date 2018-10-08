/*
    dynamicform.js: contains all source information.
    Copyright (C) 2018 Ethan Nguyen/TheDragonFire961.
	This file is part of OpenCite.
	OpenCite is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    OpenCite is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with OpenCite.  If not, see <https://www.gnu.org/licenses/>.
*/

// This object contains the locations of citation form files
var citelanding = ["newcitation", "citationlist", "references"];
var citelandingelements = ["tab-new-citation", "tab-previous-citation", "tab-references"];

// getSourceForm(); creates a dynamic form when the source type is changed.
// Usage: getSourceForm('documenttype');
function changeTab(activeTab, tabArray, tabElementArray) {
	for (var i = 0, len = tabArray.length; i < len; i++) {
        if (tabArray[i] === activeTab) {
			document.getElementById(tabElementArray[i]).class = "tabbutton selected force-font";
			document.getElementById(tabArray[i]).style.display = "block";
		} else {
			document.getElementById(tabElementArray[i]).class = "tabbutton force-font";
			document.getElementById(tabArray[i]).style.display = "none";
		}
    }
}