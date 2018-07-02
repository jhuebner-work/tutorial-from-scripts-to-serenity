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
        return actor.attemptsTo.apply(actor, [Open.browserOn('/examples/angularjs/')].concat(this.addAll(this.items) // ``...` is a spread operator,
        )); // which converts a list to vararg
    };
    return AddATodoItem;
}());
exports.AddATodoItem = AddATodoItem;
//# sourceMappingURL=add_a_todo_item.js.map