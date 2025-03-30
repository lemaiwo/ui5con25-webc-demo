sap.ui.define([
	"sap/ui/core/webc/WebComponent"
], function(WebComponent) {
	"use strict";
	return WebComponent.extend("com.myorg.myapp.control.loader", {
		metadata: {
			tag: "nv-loader",
			properties: {
				"color": {
					type: "string",
					mapping: "Color"
				},
				"loading":{
					type:"boolean",
					mapping:"Loading"
				},
				"size": {
					type: "string",
					mapping: "Size"
				}
			},
			events: {
				"click": {}
			}
		}
	});
});
