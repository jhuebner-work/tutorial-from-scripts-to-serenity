"use strict";
// spec/screenplay/components/todo_list.ts
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("serenity-js/protractor");
var protractor_2 = require("protractor");
var TodoList = (function () {
    function TodoList() {
    }
    TodoList.What_Needs_To_Be_Done = protractor_1.Target.the('"What needs to be done?" input box')
        .located(protractor_2.by.id('new-todo'));
    TodoList.Items = protractor_1.Target.the('List of Items').located(protractor_2.by.repeater('todo in todos'));
    TodoList.Items_Displayed = protractor_1.Text.ofAll(TodoList.Items);
    return TodoList;
}());
exports.TodoList = TodoList;
//# sourceMappingURL=todo_list.js.map