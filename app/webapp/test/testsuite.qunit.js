sap.ui.define(function () {
	"use strict";

	return {
		name: "QUnit test suite for the UI5 Application: be.wl.webc.demo",
		defaults: {
			page: "ui5://test-resources/be/wl/webc/demo/Test.qunit.html?testsuite={suite}&test={name}",
			qunit: {
				version: 2
			},
			sinon: {
				version: 1
			},
			ui5: {
				language: "EN",
				theme: "sap_horizon"
			},
			coverage: {
				only: "be/wl/webc/demo/",
				never: "test-resources/be/wl/webc/demo/"
			},
			loader: {
				paths: {
					"be/wl/webc/demo": "../"
				}
			}
		},
		tests: {
			"unit/unitTests": {
				title: "Unit tests for be.wl.webc.demo"
			},
			"integration/opaTests": {
				title: "Integration tests for be.wl.webc.demo"
			}
		}
	};
});
