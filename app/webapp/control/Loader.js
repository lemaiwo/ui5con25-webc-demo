sap.ui.define([
	"./StencilComponent"
], function(WebComponent) {
	"use strict";
	return WebComponent.extend("be.wl.webc.demo.control.loader", {
		metadata: {
			tag: "nv-loader",
			properties: {
				"color": {
					type: "string"
				},
				"loading":{
					type:"boolean"
				},
				"size": {
					type: "string"
				}
			},
			events: {
				"click": {}
			}
		}
	});
});
