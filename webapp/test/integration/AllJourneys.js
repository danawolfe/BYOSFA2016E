jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
		"sap/ui/test/Opa5",
		"com/dlw/test/integration/pages/Common",
		"sap/ui/test/opaQunit",
		"com/dlw/test/integration/pages/Worklist",
		"com/dlw/test/integration/pages/Object",
		"com/dlw/test/integration/pages/NotFound",
		"com/dlw/test/integration/pages/Browser",
		"com/dlw/test/integration/pages/App"
	], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.dlw.view."
	});

	sap.ui.require([
		"com/dlw/test/integration/WorklistJourney",
		"com/dlw/test/integration/ObjectJourney",
		"com/dlw/test/integration/NavigationJourney",
		"com/dlw/test/integration/NotFoundJourney"
	], function () {
		QUnit.start();
	});
});