sap.ui.define([
	"./StencilComponent"
], function(WebComponent) {
	"use strict";
	return WebComponent.extend("be.wl.webc.demo.control.Fielddropdownitem", {
		metadata: {
			tag: "nv-fielddropdownitem",
			properties: {
				"value": {
					type: "string"
				},
				"label": {
					type: "string"
				}
			},
			events: {
			}
		},

		init: function() {
			WebComponent.prototype.init.apply(this, arguments);
		},
	});
});
