sap.ui.define([
	"sap/ui/core/webc/WebComponent"
], function(WebComponent) {
	"use strict";
	return WebComponent.extend("com.myorg.myapp.control.Fieldtext", {
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
