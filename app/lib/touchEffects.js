exports.createTouchEffect = function(vwToAddEffect) {
	
	vwToAddEffect.addEventListener('touchstart', function(e) {
		e.source.backgroundColor = "gray";

	});

	vwToAddEffect.addEventListener('touchend', function(e) {
		e.source.backgroundColor = "transparent";

	});

	vwToAddEffect.addEventListener('touchcancel', function(e) {
		e.source.backgroundColor = "transparent";

	}); 

};
