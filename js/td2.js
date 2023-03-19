/**
* 
* M413 - TD2
* * 
* 	@author Jean-Michel Bruneau
*	@copyright UCA - IUT -INFO
* 	@version	1.0
* 	@date			2021-01-31
*
*/
"use strict";

// M413 - TD2
let message = 'JavaScript is ok :)';
// alert( message);
console.log(message);

function onLoad() {
	console.log('Processus de chargement du document terminé…');
	//
	// All your JavaScript code goes here !
	//

}

// Toute les ressources de la page sont complètement chargées.
window.onload = onLoad;

document.addEventListener("click", select2);

function initSelect(event) {
	if (event.target.style.backgroundColor == "red") {
		event.target.style.backgroundColor = null;
	}
	else {
		event.target.style.backgroundColor = "red";
	}
}

let ancienEvent = null;

function select(event) {
	event.target.style.backgroundColor = "blue";
	if (ancienEvent) {
		if (ancienEvent.target == event.target) {
			if (ancienEvent.target.style.backgroundColor == "blue") {
				event.target.style.backgroundColor = null;
				ancienEvent = null;
			}
			else {
				ancienEvent = event;
			}
		}
		else {
			ancienEvent.target.style.backgroundColor = null;
			ancienEvent = event;
		}
	} else {
		ancienEvent = event;
	}

}

function select2(event) {
	if (!event.target.closest("#insert-div")) {
		event.target.style.backgroundColor = "blue";
		if (ancienEvent) {
			if (ancienEvent.target == event.target) {
				if (ancienEvent.target.style.backgroundColor == "blue") {
					event.target.style.backgroundColor = null;
					ancienEvent = null;
				}
				else {
					ancienEvent = event;
				}
			}
			else {
				ancienEvent.target.style.backgroundColor = null;
				ancienEvent = event;
			}
		} else {
			ancienEvent = event;
		}
	}
}

function insertElement(target) {
	const selectElement = document.querySelector('#insert-div select');
	const selectedType = selectElement.value;
 
	const textInput = document.querySelector('#insert-div input[type="text"]');
	const text = textInput.value;
 
	const newElement = document.createElement(selectedType);
	newElement.textContent = text;
 
	target.parentNode.insertBefore(newElement, target);
 }
 

function search() {
	var inputRecherche = document.getElementById("inputRecherche");
	var searchTerm = inputRecherche.value;
	if (!savedPage) {
		savedPage = document.body.innerHTML;
	} else {
		document.body.innerHTML = savedPage;
	}
	var regex = new RegExp(searchTerm, "gi");
	var bodyHtml = document.body.innerHTML;
	var highlightedHtml = bodyHtml.replace(regex, match => `<span class="select">${match}</span>`);
	document.body.innerHTML = highlightedHtml;
}

var boutonRecherche = document.getElementById("boutonRecherche");
boutonRecherche.addEventListener("click", search);

