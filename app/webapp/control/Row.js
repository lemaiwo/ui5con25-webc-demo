sap.ui.define([
	"sap/ui/core/webc/WebComponent"
], function(WebComponent) {
	"use strict";
	return WebComponent.extend("com.myorg.myapp.control.Row", {
		metadata: {
			tag: "nv-row",
			properties: {
			},
			defaultAggregation: "default",
			aggregations: {
				default: {
					type: "sap.ui.core.Control",
					multiple: true,
					slot: "default"
				}
			},
			events: {
				"click": {}
			}
		}
	});
});
