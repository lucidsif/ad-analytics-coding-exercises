setInterval(function() {
	if (window[answerFn]) {
		var pct = window[answerFn]();
		document.getElementById('answer').innerHTML = pct;
	}
}, 500);
