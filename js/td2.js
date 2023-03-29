function onLoad() {

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
		insertElement(event.target);

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
			//insertElement(event.target);
		}
	}

	function insertElement(target) {
		var insertType = document.getElementById("insert-type").value;
		var insertText = document.getElementById("insert-text").value;
		var newElement = document.createElement(insertType);
		newElement.textContent = insertText;
		target.parentNode.insertBefore(newElement, target);
	}

	function search() {
		var inputRecherche = document.getElementById("inputRecherche");
		var texteRecherche = inputRecherche.value;

		var nodes = document.body.childNodes;
		for (var i = 0; i < nodes.length; i++) {
			var node = nodes[i];
			if (node.nodeType === Node.TEXT_NODE && node.textContent.includes(texteRecherche)) {
				var startIndex = node.textContent.indexOf(texteRecherche);
				var endIndex = startIndex + texteRecherche.length;
				var beforeText = node.textContent.substring(0, startIndex);
				var searchText = node.textContent.substring(startIndex, endIndex);
				var afterText = node.textContent.substring(endIndex);
				var div = document.createElement("div");
				span.appendChild(document.createTextNode(beforeText));
				var mark = document.createElement("mark");
				mark.style.backgroundColor = "yellow";
				mark.appendChild(document.createTextNode(searchText));
				div.appendChild(mark);
				div.appendChild(document.createTextNode(afterText));
				node.parentNode.replaceChild(div, node);
			} else if (node.nodeType === Node.ELEMENT_NODE && node.childNodes.length > 0) {
				searchRecursive(node, texteRecherche);
			}
		}
	}

	function searchRecursive(node, texteRecherche) {
		var children = node.childNodes;
		for (var i = 0; i < children.length; i++) {
			var child = children[i];
			if (child.nodeType === Node.TEXT_NODE && child.textContent.includes(texteRecherche)) {
				var startIndex = child.textContent.indexOf(texteRecherche);
				var endIndex = startIndex + texteRecherche.length;
				var beforeText = child.textContent.substring(0, startIndex);
				var searchText = child.textContent.substring(startIndex, endIndex);
				var afterText = child.textContent.substring(endIndex);
				var mark = document.createElement("mark");
				mark.style.backgroundColor = "yellow";
				mark.appendChild(document.createTextNode(searchText));
				var div = document.createElement("div");
				div.appendChild(document.createTextNode(beforeText));
				div.appendChild(mark);
				div.appendChild(document.createTextNode(afterText));
				child.parentNode.replaceChild(div, child);
			} else if (child.nodeType === Node.ELEMENT_NODE && child.childNodes.length > 0) {
				searchRecursive(child, texteRecherche);
			}
		}
	}





	var boutonRecherche = document.getElementById("boutonRecherche");
	boutonRecherche.addEventListener("click", search);

}

window.onload = onLoad;