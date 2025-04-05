sap.ui.define([
	"sap/ui/core/webc/WebComponent"
], function(WebComponent) {
	"use strict";
	return WebComponent.extend("com.myorg.myapp.control.table", {
		metadata: {
			tag: "nv-table",
			properties: {
				"no-columns-no-data-message": {
					type: "string"
				},
				"columns-config-json": {
					type: "string"
				},
				"columnsConfig":{
					type:"object"
				},
				"columns-config":{
					type:"object",
					mapping: ".columns-config"
				},
				"data-json":{
					type:"string",
					mapping: "data-json"
				}
			},
			events: {
				"click": {}
			}
		}
	});
});
