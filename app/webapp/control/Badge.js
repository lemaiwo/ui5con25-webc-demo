sap.ui.define([
	"sap/ui/core/webc/WebComponent"
], function(WebComponent) {
	"use strict";
	return WebComponent.extend("com.myorg.myapp.control.Badge", {
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
