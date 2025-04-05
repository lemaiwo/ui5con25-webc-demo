sap.ui.define([
	"sap/ui/core/webc/WebComponent"
], function(WebComponent) {
	"use strict";
	return WebComponent.extend("com.myorg.myapp.control.Button", {
		metadata: {
			tag: "nv-button",
			properties: {
				"color": {
					type: "string"
				},
				"cta":{
					type:"boolean"
				},
				"value": {
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
