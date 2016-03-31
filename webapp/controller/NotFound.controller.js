sap.ui.define([
		"com/dlw/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("com.dlw.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);