"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AddATodoItem = (function () {
    function AddATodoItem(itemName) {
        this.itemName = itemName;
    } // to a private field
    AddATodoItem.called = function (itemName) {
        return new AddATodoItem(itemName);
    };
    AddATodoItem.prototype.performAs = function (actor) {
        return actor.attemptsTo();
    };
    return AddATodoItem;
}());
exports.AddATodoItem = AddATodoItem;
//# sourceMappingURL=add_a_todo_item.js.map