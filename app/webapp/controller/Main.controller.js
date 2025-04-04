sap.ui.define(["./BaseController", "sap/m/MessageBox"], function (BaseController, MessageBox) {
	"use strict";

	return BaseController.extend("be.wl.webc.demo.controller.Main", {
		sayHello: function () {
			MessageBox.show("Hello World!");
		}
	});
});
