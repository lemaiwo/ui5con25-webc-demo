sap.ui.define([
	"./BaseController",
	"sap/m/MessageBox",
	"sap/ui/model/json/JSONModel",
	"sap/m/Dialog",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"be/wl/webc/demo/control/Loader"
], function (
	BaseController, MessageBox, JSONModel, Dialog, Filter, FilterOperator, Loader
) {
	"use strict";

	return BaseController.extend("be.wl.webc.demo.controller.Main", {
		onInit: function () {
			this.setModel(new JSONModel({
				todo: "", todos: [], items: `[
					{
						"status": "",
						"description": "Dummy"
					}
				]`}));
		},
		addTodo: function (event) {
			const dialog = new Dialog({
				showHeader: false,
				height: "250px",
				width: "250px",
				content: [new Loader({ size: "xl" })]
			});
			dialog.open();
			setTimeout(() => dialog.close(), 300)
			const todos = this.getModel().getProperty("/todos");
			// const items = this.getModel().getProperty("/items");
			// const parsedItems = JSON.parse(items);
			this.getModel().setProperty("/todos", []);
			const todo = this.getModel().getProperty("/todo");
			todos.push({ checked: false, description: todo, createdOn: new Date() });
			// parsedItems.push({status:"",description:todo});
			this.getModel().setProperty("/todos", todos);
			this.getModel().setProperty("/todo", "");
			// this.getModel().setProperty("/items",JSON.stringify(parsedItems));
			// this.byId("table").rerender();
		},
		deleteTodo: function (event) {
			const ctx = event.getSource().getBindingContext();
			const item = ctx.getObject();

			const todos = this.getModel().getProperty("/todos");
			const newTodos = todos.filter(todo => todo.createdOn !== item.createdOn);
			this.getModel().setProperty("/todos", []);

			this.getModel().setProperty("/todos", newTodos);
		},
		statusChanged: function (event) {
			this.triggerReRenderTable();
		},
		onFilterChanged: function(oEvent) {
			this.triggerReRenderTable();

			// const sKey = oEvent.getSource().getSelectedKey();
			const sKey = oEvent.getParameter("value");
			const oTable = this.byId("todosTable");
			const oBinding = oTable.getBinding("items");
			const filters = [];
			if (sKey === "checked") {
				filters.push(new Filter("checked", FilterOperator.EQ, true));
			} else if (sKey === "unchecked") {
				filters.push(new Filter("checked", FilterOperator.EQ, false));
			}
			oBinding.filter(filters);
		},
		triggerReRenderTable: function () {
			const todos = this.getModel().getProperty("/todos");
			this.getModel().setProperty("/todos", []);
			this.getModel().setProperty("/todos", todos);
		}
	});
});
