sap.ui.define([
	"sap/ui/core/UIComponent", 
	"sap/ui/Device", 
	"./model/models",
	"sap/ui/dom/includeStylesheet",
	"@nova-design-system/nova-webcomponents/loader"], 
	function (UIComponent, Device, models,includeStylesheet,novaLoader) {
	"use strict";

	includeStylesheet(sap.ui.require.toUrl("@nova-design-system/nova-base/dist/css/nova-utils.css"));
	includeStylesheet(sap.ui.require.toUrl("@nova-design-system/nova-base/dist/css/spark.css")); // or ocean.css

	const { defineCustomElements } = novaLoader;
	defineCustomElements();

	return UIComponent.extend("be.wl.webc.demo.Component", {
		metadata: {
			manifest: "json",
			interfaces: ["sap.ui.core.IAsyncContentCreation"]
		},
		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.call(this); // create the views based on the url/hash

			// create the device model
			this.setModel(models.createDeviceModel(), "device");

			// create the views based on the url/hash
			this.getRouter().initialize();
		},
		/**
		 * This method can be called to determine whether the sapUiSizeCompact or sapUiSizeCozy
		 * design mode class should be set, which influences the size appearance of some controls.
		 * @public
		 * @returns {string} css class, either 'sapUiSizeCompact' or 'sapUiSizeCozy' - or an empty string if no css class should be set
		 */
		getContentDensityClass: function () {
			if (this.contentDensityClass === undefined) {
				// check whether FLP has already set the content density class; do nothing in this case
				if (document.body.classList.contains("sapUiSizeCozy") || document.body.classList.contains("sapUiSizeCompact")) {
					this.contentDensityClass = "";
				} else if (!Device.support.touch) {
					// apply "compact" mode if touch is not supported
					this.contentDensityClass = "sapUiSizeCompact";
				} else {
					// "cozy" in case of touch support; default for most sap.m controls, but needed for desktop-first controls like sap.ui.table.Table
					this.contentDensityClass = "sapUiSizeCozy";
				}
			}
			return this.contentDensityClass;
		}
	});
});
