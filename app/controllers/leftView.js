Alloy.Globals.currentView = 'centerView';
// Populate data for the left menu 
var items = [{
	label: { text: "Home" },
	image: { image: "/images/food.jpg" },
	template: "item_title"
}, {
	label: { text: "Musea" },
	image: { image: "/images/food.jpg" },
	template: "item_title"
}, {
	label: { text: "Resturent" },
	image: { image: "/images/food.jpg" },
	template: "item_title"
}, {
	label: { text: "Playgraden" },
	image: { image: "/images/food.jpg" },
	template: "item_title"
}, {
	label: { text: "Cafe" },
	image: { image: "/images/food.jpg" },
	template: "item_title"
}];

$.Left_elementsList.sections[0].items = items;
/////////////////////END//////////////////////////


// For handeling leftView Menu item 

function handleClick(e) {
	Alloy.Events.trigger('toggleLeft_Window');

	let section = $.Left_elementsList.sections[e.sectionIndex];
	// Get the clicked item from that section
	let item = section.getItemAt(e.itemIndex);

	if (item.label.text == "Home") {

		Alloy.Events.trigger('goToHome_fromDetailsWind');
		Alloy.Events.trigger('goToHome_frommenuListItemWin');

	} else {


		//let centerWin = require('appLevelVariable');
		let menulistItemView = Alloy.createController('menuListItem').getView();
		// Get the section of the clicked item

		require("loader_indica").removeLoader();
		require("loader_indica").addLoader(menulistItemView, "Loading Data..");

		Ti.API.info("Position" + e.itemIndex);
		// Update the item's `title` property and set it's color to red:
		Ti.API.info(item.label.text += " (clicked)");
		//Ti.API.info(centerWin_ios.getCenterwin());
		//centerWin.getCenterwin().add(menulistItemView);
		Alloy.Globals.centerWin.add(menulistItemView);
		//Ti.API.info("win",centerWin_ios.getData());
		require("animation").rightToLeft(menulistItemView);

	}
}

///////////////////////END////////////////////////////////


// For selected bacground color

function touchStart_leftview(e) {
	e.source.backgroundColor = Alloy.Globals.themeColor;
}

function touchEnd_leftview(e) {
	e.source.backgroundColor = "transparent";
}

function touchCancle_leftview(e) {
	e.source.backgroundColor = "transparent";
}


//////////////////END//////////////////


//Remove value

items = null;