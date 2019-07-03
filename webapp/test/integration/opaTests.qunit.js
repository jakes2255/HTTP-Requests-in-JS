/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/study/Z_HttpRequests/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});