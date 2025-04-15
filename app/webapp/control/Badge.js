sap.ui.define([
	"./StencilComponent"
], function(WebComponent) {
	"use strict";
	return WebComponent.extend("be.wl.webc.demo.control.Badge", {
		metadata: {
			tag: "nv-badge",
			properties: {
				"icon": {
					type: "string",
					mapping: "Icon"
				},
				"color":{
					type:"string",
					mapping:"Color"
				},
				"text": {
					type: "string",
					mapping: "textContent"
				}
			},
			events: {
				"click": {}
			}
		}
	});
});
