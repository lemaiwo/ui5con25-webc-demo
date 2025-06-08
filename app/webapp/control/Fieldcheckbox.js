sap.ui.define([
	"./StencilComponent"
], function(WebComponent) {
	"use strict";
	return WebComponent.extend("be.wl.webc.demo.control.fieldcheckbox", {
		metadata: {
			tag: "nv-fieldcheckbox",
			properties: {
				"checked": {
					type: "boolean"
				},
				"label": {
					type: "string"
				},
				"description": {
					type: "string"
				}
			},
			events: {
				"changed": {
					parameters: {
						state: {
							type: "boolean"
						}
					}
				}
			}
		},
		init: function() {
			WebComponent.prototype.init.apply(this, arguments);
			this.attachBrowserEvent("checkedChanged", (oEvent) => {
				console.log("checkedChanged event", oEvent);
				this.setProperty("checked", oEvent.detail, true);
				this.fireEvent("changed", { state: oEvent.detail });
			});
		},
	});
});
