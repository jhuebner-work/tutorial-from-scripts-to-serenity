"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("serenity-js/protractor");
var protractor_2 = require("protractor");
var todo_list_1 = require("../components/todo_list");
var AddATodoItem = (function () {
    function AddATodoItem(itemName) {
        this.itemName = itemName;
    } // to a private field
    AddATodoItem.called = function (itemName) {
        return new AddATodoItem(itemName);
    };
    AddATodoItem.prototype.performAs = function (actor) {
        return actor.attemptsTo(protractor_1.Enter.theValue(this.itemName) // enter the value of the item name
            .into(todo_list_1.TodoList.What_Needs_To_Be_Done) // into a "What needs to be done" field
            .thenHit(protractor_2.protractor.Key.ENTER) // then hit enter...
        );
    };
    return AddATodoItem;
}());
exports.AddATodoItem = AddATodoItem;
//# sourceMappingURL=add_a_todo_item.js.map