sap.ui.define([
	"sap/ui/core/webc/WebComponent"
], function(WebComponent) {
	"use strict";
	return WebComponent.extend("com.myorg.myapp.control.Fieldtext", {
		metadata: {
			tag: "nv-fieldtext",
			properties: {
				"value": {
					type: "string"
				}
			},
			events: {
				"valueChanged": {}
			}
		}
	});
});
