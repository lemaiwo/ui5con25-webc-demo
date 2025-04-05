sap.ui.define([
	"sap/ui/core/webc/WebComponent"
], function(WebComponent) {
	"use strict";
	return WebComponent.extend("com.myorg.myapp.control.Alert", {
		metadata: {
			tag: "nv-alert",
			properties: {
				"close": {
					type: "boolean"
				},
				"icon":{
					type:"string"
				},
				"visible":{
					type:"boolean"
				},
				"permanent":{
					type:"boolean"
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
