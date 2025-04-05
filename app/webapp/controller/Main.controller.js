sap.ui.define(["./BaseController", "sap/m/MessageBox","sap/ui/model/json/JSONModel"], function (BaseController, MessageBox,JSONModel) {
	"use strict";

	return BaseController.extend("be.wl.webc.demo.controller.Main", {
		onInit:function(){
			this.setModel(new JSONModel({todo:"",todos:[],items:`[
    {
        "status": "",
        "description": "Dummy"
    }
]`}));
		},
		onTodoChanged:function(event){
			this.getModel().setProperty("/todo","");
		},
		onCheckedChanged:function(event){
			this.getModel().setProperty("/todo","");
		},
		addTodo: function (event) {
			const todos = this.getModel().getProperty("/todos");
			const items = this.getModel().getProperty("/items");
			const parsedItems = JSON.parse(items);
			this.getModel().setProperty("/todos",[]);
			this.getModel().setProperty("/items",[]);
			// const todo = this.getModel().getProperty("/todo");
			const todo = this.byId("todo").getDomRef().value;
			todos.push({checked:false,description:todo});
			parsedItems.push({status:"",description:todo});
			this.getModel().setProperty("/todos",todos);
			this.getModel().setProperty("/items",JSON.stringify(parsedItems));
			this.byId("table").rerender();
		}
	});
});
