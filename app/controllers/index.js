var leftViewwin = Alloy.createController('leftView').getView();
var centerViewwin = Alloy.createController('centerView').getView();


if (OS_ANDROID) {
	$.drawer.centerView = centerViewwin;
	$.drawer.leftView = leftViewwin;
}
function onClickToggle(e) {
	$.drawer.toggleLeft();
}

if (OS_IOS) {

	var NappDrawerModule = require('dk.napp.drawer');
	var mainWindow = NappDrawerModule.createDrawer({
		centerWindow: centerViewwin,
		leftWindow: leftViewwin,
		//closeDrawerGestureMode : NappDrawerModule.CLOSE_MODE_ALL,
		openDrawerGestureMode: NappDrawerModule.OPEN_MODE_ALL,
		leftDrawerWidth: 200,
		rightDrawerWidth: 220,
		closeDrawerGestureMode: NappDrawerModule.CLOSE_MODE_TAP_CENTERWINDOW | NappDrawerModule.CLOSE_MODE_PANNING_CENTERWINDOW,
		statusBarStyle: NappDrawerModule.STATUSBAR_WHITE,
		orientationModes: [Ti.UI.PORTRAIT, Ti.UI.UPSIDE_PORTRAIT]
	});
	$.index.add(centerViewwin);
	mainWindow.open();

	Alloy.Events.on('toggleLeft_Window', closeLeftWin);

	function closeLeftWin() {
		mainWindow.toggleLeftWindow();
		//Ti.API.info("click on fireevent");
	}

	mainWindow.addEventListener('close', function () {
		Alloy.Events.off('toggleLeft_Window');
	});
} else {
	$.index.open();

	Alloy.Events.on('toggleLeft_Window', closeLeftWin);

	function closeLeftWin() {
		$.drawer.toggleLeft();
		//Ti.API.info("click on fireevent");
	}

	$.index.addEventListener('close', function () {
		Alloy.Events.off('toggleLeft_Window');
	});

	$.index.addEventListener("androidback", function () {

		Ti.API.info("win", Alloy.Globals.currentView);

		//$.drawer.toggleLeft();
		switch (Alloy.Globals.currentView) {

			case 'detailsView':
				Ti.API.info("Back from details");
				Alloy.Events.trigger('goToHome_fromDetailsWind');
				if (Alloy.Globals.rootWin == "menuListItem") {
					Alloy.Globals.currentView = 'menuListItem';
				} else {
					Alloy.Globals.currentView = 'centerView';
				}

				break;
			case 'menuListItem':
				Ti.API.info("Back from menuItem");
				Alloy.Events.trigger('goToHome_frommenuListItemWin');
				Alloy.Globals.currentView = 'centerView';
				break;
			default:
				$.index.close();
				Alloy.Globals.currentView = null;
				$.off();
				$.destroy();

		}
	});
}

