"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("serenity-js/protractor");
var add_a_todo_item_1 = require("./add_a_todo_item");
var Start = (function () {
    function Start(items) {
        this.items = items;
    }
    Start.withATodoListContaining = function (items) {
        return new Start(items);
    };
    Start.prototype.performAs = function (actor) {
        return actor.attemptsTo.apply(actor, [protractor_1.Open.browserOn('/examples/angularjs/')].concat(this.addAll(this.items) // ``...` is a spread operator,
        )); // which converts a list to vararg
    };
    Start.prototype.addAll = function (items) {
        return items.map(function (item) { return add_a_todo_item_1.AddATodoItem.called(item); }); // into a list of Tasks
    };
    return Start;
}());
exports.Start = Start;
//# sourceMappingURL=start.js.map