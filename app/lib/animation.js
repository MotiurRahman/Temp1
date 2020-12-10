exports.bottomTotop = function (animateWin) {

	//	Ti.API.info("animation page");

	var bottomTotop = Ti.UI.createAnimation({
		top: '0%',
		duration: 200,
	});

	animateWin.animate(bottomTotop);
};

exports.rightToLeft = function (animateWin) {

	//	Ti.API.info("animation page");

	var rightTo_Left = Ti.UI.createAnimation({
		left: '0%',
		duration: 200,
	});

	animateWin.animate(rightTo_Left);
};

exports.leftToRight = function (animateWin) {

	//	Ti.API.info("animation page");

	var leftTo_right = Ti.UI.createAnimation({
		left: '100%',
		duration: 200,
	});

	animateWin.animate(leftTo_right);
};


exports.rightToLeft_listItem = function (animateWin) {

	//	Ti.API.info("animation page");

	var rightTo_Left = Ti.UI.createAnimation({
		left: '0%',
		duration: 3000,
	});

	animateWin.animate(rightTo_Left);
};

exports.leftToRight_listitem = function (animateWin) {

	//	Ti.API.info("animation page");

	var leftTo_right = Ti.UI.createAnimation({
		left: '100%',
		duration: 3000,
	});

	animateWin.animate(leftTo_right);
};

////////////
exports.leftToRight_rightToLeft = function (animateWin) {
	var a = Ti.UI.createAnimation({
		left: '100%',
		duration: 5000,
	});
	var b = Ti.UI.createAnimation({
		left: '0%',
		duration: 5000,
	});

	var c = Ti.UI.createAnimation({
		right: '100%',
		duration: 5000,
	});
	var d = Ti.UI.createAnimation({
		right: '0%',
		duration: 5000,
	});


	animateWin.animate(a, function () {
		animateWin.animate(b);
	}, function () {
		animateWin.animate(c);
	}, function () {
		animateWin.animate(d);
	});

};
///////////









exports.rightToLeft_large = function (animateWin) {

	//	Ti.API.info("animation page");

	var bottomTotop = Ti.UI.createAnimation({
		top: '5%',
		left: '0%',
		duration: 150,
	});

	animateWin.animate(bottomTotop);
};

exports.topToBottom = function (animateWin) {

	var topToBottom = Ti.UI.createAnimation({
		top: '100%',
		duration: 200,
	});

	animateWin.animate(topToBottom);
};

exports.bottomTotop_eye = function (eyeIconList) {

	var bottomTotop = Ti.UI.createAnimation({
		top: '0%',
		duration: 400,
	});

	eyeIconList.animate(bottomTotop);
};
