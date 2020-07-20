function calcu() {
	'use strict';
	let firnum = parseFloat(document.getElementById("sides").value );
	let senum = parseFloat(document.getElementById("height").value);
	let thnum = parseFloat(document.getElementById("blocks").value);
	let sidbo = firnum*senum*thnum;
	parseFloat(sidbo);
	document.getElementById("res").innerHTML=sidbo;
	document.getElementById("res64").innerHTML=parseInt(sidbo/64);
	console.log(sidbo);
	
}