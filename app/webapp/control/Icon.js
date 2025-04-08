sap.ui.define([
	"sap/ui/core/webc/WebComponent"
], function(WebComponent) {
	"use strict";
	return WebComponent.extend("com.myorg.myapp.control.Icon", {
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
