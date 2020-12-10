// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
Alloy.Globals.currentView = 'detailsView';
//Alloy.Globals.rootWin = args.rootWin;
function report(event) {
	Ti.API.info('Annotation ' + event.title + ' clicked, ID: ' + event.annotation.myID);
}


// Retrieving and setting data to the label and image view which is passed from the center listView

Ti.API.info("Text data", args.labelText);
$.labelDesc_details.text = args.labelText;
$.image_details.image = args.imageLocation;
$.labelContact_details.text = args.desc;

///////////Close the current window/////////////

Alloy.Events.on('goToHome_fromDetailsWind', goToHome_fromDetailsWind);

function goToHome_fromDetailsWind() {

	Ti.API.info("CurrentWIn",Alloy.Globals.currentView);

	if (args.rootWin == "menuListItem") {
		Alloy.Globals.currentView = 'menuListItem';
	}else{
		Alloy.Globals.currentView = 'centerView';
	}

	require("animation").leftToRight($.detailsContainer);

	setTimeout(function () {

		$.trigger('close');

	}, 201);
}
////////////End///////////////////////////

// For selected bacground color

/*

	function touchStartsd(e) {

		e.source.backgroundColor = "red";
	}

	function touchEnd(e) {

		e.source.backgroundColor = "gray";
	}

	function touchCancle(e) {
		e.source.backgroundColor = "gray";
	}
*/

//////////////////End/////////////////////