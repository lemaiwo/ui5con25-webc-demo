sap.ui.define([
	"sap/ui/core/webc/WebComponent"
], function(WebComponent) {
	"use strict";
	return WebComponent.extend("com.myorg.myapp.control.fieldcheckbox", {
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
				"checkedChanged": {parameters: {
					state: {
						type: "boolean"
					}
				}}
			}
		}
	});
});
