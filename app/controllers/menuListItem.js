// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

Alloy.Globals.currentView = 'menuListItem';

///////////Close the current window/////////////

Alloy.Events.on('goToHome_frommenuListItemWin', goToHome_frommenuListItemWin);

function goToHome_frommenuListItemWin() {
	require("animation").leftToRight($.menuListItem);

	setTimeout(function () {
		//   $.menuListItem.parent.remove($.menuListItem);
		Alloy.Globals.centerWin.remove($.menuListItem);
		//$.menuListItem = null;
		$.off();
		$.destroy();

	}, 201);

}
///////////////End//////////////////////////////

// populate listView from the XML data for the menuListItemView
var network = require('networklayer');
const url_xml = "https://bdnews24.com/?widgetName=rssfeed&widgetId=1150&getXmlFeed=true"

function pupulateDataTolistView(e) {

	var items = [];
	for (let index = 0; index < e.length; index++) {
		Ti.API.info("title", e[index].postTitle);
		Ti.API.info("postDesc", e[index].postDesc);
		Ti.API.info("img", e[index].postImage);
		Ti.API.info("Link", e[index].postLink);

		items.push({

			image: {
				image: e[index].postImage
			},
			label: {
				text: e[index].postTitle,
				value: e[index].postDesc
			},
			template: "image_title"

		});

		// items.push({
		// 	template: "separator"
		// })

	}
	//$.dynamicListView_menulist.sections[0].setItems(items, { animated: "false" });
	$.dynamicListView_menulist.sections[0].items = items;
}

network.GetToServer_xml(url_xml, function (e) {
	pupulateDataTolistView(e);
	require("loader_indica").removeLoader();

});

// populate listView from the json URL for the menuListItemView

/*
var network = require('networklayer');

const url = "https://reqres.in/api/users?page=2"



function pupulateDataTolistView(e) {
	let value = JSON.parse(e);
	let newValue = value.data;

	var items = [];
	for (let index = 0; index < newValue.length; index++) {
		Ti.API.info("first_name", newValue[index].first_name);
		Ti.API.info("ImageURL", newValue[index].avatar);

		items.push({

			image: { image: newValue[index].avatar },
			label: {
				text: newValue[index].first_name,

				left: '1.83%',
				font: {
					fontSize: '14'
				},
				color: '#d1d3d4',
				width: '98%',
				textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
				wordWrap: false,
				ellipsize: Ti.UI.TEXT_ELLIPSIZE_TRUNCATE_END,
				touchEnabled: false
			},
			template: "image_title"

		});

		items.push({
			template: "separator"
		})

	}
	$.dynamicListView.sections[0].setItems(items, { animated: "false" });
}

network.GetToServer(url, function (e) {

	pupulateDataTolistView(e);

});
*/


/* populate listView from the hardcoded dagta for the menuListItemView
var items = [];

for (let index = 0; index < 20; index++) {
	items.push({

		image: { image: "/images/food.jpg" },
		label: {
			text: `${index}. Provide a simple sfds sdfds sdfds sfsdf sdfs sdfds asda asdas a dsa asdas bsfhjf hsfhjsagf ahsgfjhsa ashgfjhsagf asdas asdas asd adhjska shgfhdsf hsgfdjhs shgfjh  shgdfjhs hgsajfhs ghafhjgs asghfjhs hgaf shfkjs ashjfkjs kahjsjas ashfkja`,

			left: '1.83%',
			font: {
				fontSize: '14'
			},
			color: '#d1d3d4',
			width: '98%',
			textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
			wordWrap: false,
			ellipsize: Ti.UI.TEXT_ELLIPSIZE_TRUNCATE_END,
			touchEnabled: false
		},
		template: "image_title"

	});

	items.push({
		template: "separator"
	})

}

$.dynamicListView.sections[0].setItems(items, { animated: "false" });

*/
//////////////////////End////////////////////////////////////////////////



function handleItemClick_menulist(e) {
	let item = e.section.getItemAt(e.itemIndex);

	Ti.API.info("specific item position", e.itemIndex);

	// Declare specific row data
	let data = {
		imageLocation: item.image.image,
		labelText: item.label.text,
		desc: item.label.value,
		rootWin: "menuListItem"
	}

	// pass data to the detailsInfo page
	let ItemDetailsView = Alloy.createController('detailsInfo', data);

	ItemDetailsView.on('close', function () {
		$.menuListItem.remove(ItemDetailsView.getView());
		$.off();
		$.destroy();
		//ItemDetailsView = null;
		Ti.API.info("I am from menulistwind")
	});

	$.menuListItem.add(ItemDetailsView.getView());
	require("animation").rightToLeft(ItemDetailsView.getView());

	item = null;
	data = null;

}

// For selected bacground color


function touchStart_menulistitem(e) {
	e.source.backgroundColor = Alloy.Globals.themeColor;
}

function touchEnd_menulistitem(e) {
	e.source.backgroundColor = "transparent";
}

function touchCancle_menulistitem(e) {
	e.source.backgroundColor = "transparent";
}


////////////////////////End////////////////

// Scrollable menu list



// create menu icon for the top scrollView position
function menuListView(i) {
	let img = Ti.UI.createImageView({
		image: `/images/food${i}.png`,

		width: "80dp",
		height: "80dp"
	});

	let imgView = Ti.UI.createView({
		backgroundColor: 'green',
		//layout: "horizontal",
		width: "80dp",
		height: "80dp",
		left: "10dp"

	});

	img.addEventListener("click", function (e) {
		alert(`food${i}`);
	})
	imgView.add(img);
	return imgView;
}

for (let index = 1; index <= 5; index++) {

	let foodItem = menuListView(index);
	$.itemList1_menulist.add(foodItem);


}
//////////////END//////////////////////////

// for (let index = 1; index <= 5; index++) {

// 	let foodItem = menuListView(index);
// 	$.itemList2.add(foodItem);

// }


// setInterval(function() {
//     require("animation").leftToRight_rightToLeft($.scrollView);
// }, 3000);

// require("animation").leftToRight_rightToLeft($.itemList1);
// require("animation").leftToRight_rightToLeft($.itemList2);

