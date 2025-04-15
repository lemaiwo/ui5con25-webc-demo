sap.ui.define([
	"./StencilComponent"
], function(WebComponent) {
	"use strict";
	return WebComponent.extend("be.wl.webc.demo.control.Row", {
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
