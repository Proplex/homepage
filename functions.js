function clock_refresh() {
	var d = new Date();
	document.getElementById("clock").innerHTML = d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
}

function hide_elements() {
	node_list = document.getElementsByClassName("row");
	for (i = 0; i < node_list.length; i+=1) {
		node_list[i].style.display = "none";
	}
}

function show_element(element) {
	hide_elements();
	document.getElementById(element).style.display = "block";
}