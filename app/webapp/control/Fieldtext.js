sap.ui.define([
	"./StencilComponent"
], function(WebComponent) {
	"use strict";
	return WebComponent.extend("be.wl.webc.demo.control.Fieldtext", {
		metadata: {
			tag: "nv-fieldtext",
			properties: {
				"value": {
					type: "string"
				}
			},
			//after-input
			
			defaultAggregation: "after",
			aggregations: {
				after: {
					type: "sap.ui.core.Control",
					multiple: false,
					slot: "after-input"
				}
			},
			events: {
				"valueChanged": {}
			}
		},

		init: function() {
			WebComponent.prototype.init.apply(this, arguments);
			this.attachBrowserEvent("valueChanged", (oEvent) => {
				console.log("valueChanged event", oEvent);
				this.setProperty("value", oEvent.detail, true);
			});
		},
	});
});
