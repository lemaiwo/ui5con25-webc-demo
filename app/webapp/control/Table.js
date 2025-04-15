sap.ui.define([
	"./StencilComponent"
], function(WebComponent) {
	"use strict";
	return WebComponent.extend("be.wl.webc.demo.control.table", {
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
