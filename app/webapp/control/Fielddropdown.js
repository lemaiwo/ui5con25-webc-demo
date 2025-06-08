sap.ui.define([
	"./StencilComponent"
], function(WebComponent) {
	"use strict";
	return WebComponent.extend("be.wl.webc.demo.control.Fielddropdown", {
		metadata: {
			tag: "nv-fielddropdown",
			properties: {
			},
			
			defaultAggregation: "content",
			aggregations: {
				content: {
					type: "be.wl.webc.demo.control.Fielddropdownitem",
					multiple: true,
					slot: "content"
				}
			},
			events: {
				"itemSelected": {
					parameters: {
						label: {
							type: "string"
						},
						value: {
							type: "string"
						}
					}
				}
			}
		},

		init: function() {
			WebComponent.prototype.init.apply(this, arguments);
			this.attachBrowserEvent("dropdownItemSelected", (oEvent) => {
				console.log("dropdownItemSelected event", oEvent);
				// this.setProperty("value", oEvent.detail, true);
				this.fireEvent("itemSelected", oEvent.detail);
			});
		},
	});
});
