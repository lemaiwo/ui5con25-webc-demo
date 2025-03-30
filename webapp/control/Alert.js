sap.ui.define([
	"sap/ui/core/webc/WebComponent"
], function(WebComponent) {
	"use strict";
	return WebComponent.extend("com.myorg.myapp.control.Alert", {
		metadata: {
			tag: "nv-alert",
			properties: {
				"close": {
					type: "boolean",
					mapping: "Close"
				},
				"icon":{
					type:"string",
					mapping:"Icon"
				},
				"visible":{
					type:"boolean",
					mapping:"Visible"
				},
				"permanent":{
					type:"boolean",
					mapping:"Permanent"
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
