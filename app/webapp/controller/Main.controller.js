sap.ui.define(["./BaseController", "sap/m/MessageBox","sap/ui/model/json/JSONModel","sap/m/Dialog","be/wl/webc/demo/control/Loader"], function (BaseController, MessageBox,JSONModel,Dialog,Loader) {
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
			const dialog = new Dialog({
				showHeader:false,
				height:"250px",
				width:"250px",
				content:[new Loader({size:"xl"})]
			});
			dialog.open();
			setTimeout(()=>dialog.close(),300)
			const todos = this.getModel().getProperty("/todos");
			// const items = this.getModel().getProperty("/items");
			// const parsedItems = JSON.parse(items);
			this.getModel().setProperty("/todos",[]);
			// this.getModel().setProperty("/items",[]);
			// const todo = this.getModel().getProperty("/todo");
			const todo = this.byId("todo").getDomRef().value;
			todos.push({checked:false,description:todo,createdOn:new Date()});
			// parsedItems.push({status:"",description:todo});
			this.getModel().setProperty("/todos",todos);
			this.byId("todo").getDomRef().value = "";
			// this.getModel().setProperty("/items",JSON.stringify(parsedItems));
			// this.byId("table").rerender();
		},
		deleteTodo:function(event){
			const ctx = event.getSource().getBindingContext();
			const item = ctx.getObject();

			const todos = this.getModel().getProperty("/todos");
			const newTodos = todos.filter(todo => todo.createdOn !== item.createdOn);
			this.getModel().setProperty("/todos",[]);

			this.getModel().setProperty("/todos",newTodos);
		}
	});
});
