/*
    dynamicform.js: contains all source information.
    Copyright (C) 2018 Ethan Nguyen/TheDragonFire961.
	This file is part of EdgeCite.
	EdgeCite is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    EdgeCite is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with EdgeCite.  If not, see <https://www.gnu.org/licenses/>.
*/

// This object contains the locations of citation form files
var sourceForms = {apawebpage:"forms/apawebpage.html"};

function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function() {
        if(rawFile.readyState === 4) {
            if(rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
                return allText;
            }
        }
    }
    // rawFile.send(null);
}

// getSourceForm(); creates a dynamic form when the source type is changed.
// Usage: getSourceForm('documenttype');
function getSourceForm(documentType) {
	console.log("hello");
	document.getElementById("citation-form").innerHTML = readTextFile(sourceForms.documentType);
}