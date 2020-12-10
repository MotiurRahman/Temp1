// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};
Alloy.Events = _.clone(Backbone.Events);
Alloy.Globals.Map = require('ti.map');

let isAndroid = (Ti.Platform.osname == 'android') ? true : false;
//require("alloyXL");

Alloy.Globals.themeColor = "#1675d1";
Alloy.Globals.themeTextColor = "#e6e7e8";
Alloy.Globals.themeTextColorBlack = "#000000";