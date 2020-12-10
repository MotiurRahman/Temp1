// Arguments passed into this controller can be accessed via the `$.args` object directly or:
let args = $.args;

Alloy.Globals.currentView = 'centerView';

function scrollStart(){
  $.searchView.blur();
}


// Declair Application laver variable page
//var appLevelVariableManagement = require('appLevelVariable');

// populate listView for the center window
let items = [];

for (let index = 0; index < 20; index++) {
  items.push({
    image: { image: "/images/food.jpg" },
    label: {
      text: `${index}. Provide a simple, mobile-optimized connection to backend data.`,
      left: "5dp"
    },
    properties: {
      searchableText: `${index}`
    },
    template: "image_title"
  })

}

//$.dynamicListView.sections[0].setItems(items, { animated: "false" });
$.dynamicListView.sections[0].items = items;
//////////////////////////////END///////////////////////////////////////////
function updateSearch(e) {
  $.dynamicListView.searchText = e.value;

}



// For handeling listview item click
function handleItemClick(e) {
  $.searchView.blur();
  let item = e.section.getItemAt(e.itemIndex);

  Ti.API.info("specific item position", e.itemIndex);

  // Declare specific row data
  let data = {
    imageLocation: item.image.image,
    labelText: item.label.text,
    rootWin: "centerView"
  }

  // pass data to the detailsInfo page
  let ItemDetailsView = Alloy.createController('detailsInfo', data);

  ItemDetailsView.on('close', function () {
    $.centerWin.remove(ItemDetailsView.getView());
    $.off();
    $.destroy();
    Ti.API.info("I am from centerwindow");
   // ItemDetailsView = null;
  });

  $.centerWin.add(ItemDetailsView.getView())
  require("animation").rightToLeft(ItemDetailsView.getView());

  item = null;
  data = null;
 


}
////////////////END////////////////////////



// setting center window as an application-level variable so that we can get it through entire window
Alloy.Globals.centerWin = $.centerWin;
//////////////END///////////////////////////////////////



// For selected bacground color

function touchStart(e) {
  e.source.backgroundColor = Alloy.Globals.themeColor;
}

function touchEnd(e) {
  e.source.backgroundColor = "transparent";

}

function touchCancle(e) {
  e.source.backgroundColor = "transparent";

}

// Remove value

items = null;


//////////////////END//////////////////