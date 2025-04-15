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
		}
	});
});
