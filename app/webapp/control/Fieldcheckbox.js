sap.ui.define([
	"./StencilComponent"
], function(WebComponent) {
	"use strict";
	return WebComponent.extend("be.wl.webc.demo.control.fieldcheckbox", {
		metadata: {
			tag: "nv-fieldcheckbox",
			properties: {
				"checked": {
					type: "string"
				},
				"label": {
					type: "string"
				},
				"description": {
					type: "string"
				}
			},
			events: {
				"checked-changed": {parameters: {
					state: {
						type: "boolean"
					}
				}}
			}
		}
	});
});
