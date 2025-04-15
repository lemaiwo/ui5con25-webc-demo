sap.ui.define([
	"./StencilComponent"
], function(WebComponent) {
	"use strict";
	return WebComponent.extend("be.wl.webc.demo.control.Icon", {
		metadata: {
			tag: "nv-icon",
			properties: {
				"color": {
					type: "string"
				},
				"name":{
					type:"string"
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
