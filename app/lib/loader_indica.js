var vwLoaderContainer = null;
var imgLoader = null;
//This function creates and removes the activity indicator/Loader
exports.addLoader = function(parentView, txt) {
	if (vwLoaderContainer === null) {
		vwLoaderContainer = Ti.UI.createView({
			width : Ti.UI.FILL,
			height : Ti.UI.FIL,
			zIndex : 100,
			left : '0dp',
			right : '0dp',
			top : '0dp',
			bottom : '0dp',
			backgroundColor : 'transparent',
		});

		var vwIndicator = Ti.UI.createView({
			width : Ti.UI.SIZE,
			height : '70dp',
			backgroundColor : 'transprent',
			layout : 'horizontal',
			borderRadius : '6dp'
		});

		imgLoader = Ti.UI.createActivityIndicator({
			style : Titanium.UI.ActivityIndicatorStyle.BIG,
			indicatorColor : Alloy.Globals.themeColor,
			left : "10dp",
			//images : arrLoader,
			//duration : 150,
			zIndex : 100001,
		});

		var lblLoading = Ti.UI.createLabel({
			text : "  " + txt + ". ",
			left : '10dp',
			font : ( {
				fontSize : '15dp',
			}),
			color : Alloy.Globals.themeColor,
		});

		vwIndicator.add(imgLoader);
		imgLoader.show();
		vwIndicator.add(lblLoading);
		lblLoading = null;
		vwLoaderContainer.add(vwIndicator);
		vwIndicator = null;
		parentView.add(vwLoaderContainer);

	}
};

exports.removeLoader = function() {
	if (vwLoaderContainer !== null && vwLoaderContainer.parent !== undefined && vwLoaderContainer.parent !== null && imgLoader !== null && imgLoader !== undefined) {
		imgLoader.hide();
		imgLoader.parent.remove(imgLoader);
		vwLoaderContainer.parent.remove(vwLoaderContainer);
		vwLoaderContainer = null;
		imgLoader = null;
	}
};
