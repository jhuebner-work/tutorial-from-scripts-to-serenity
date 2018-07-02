"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Start = (function () {
    function Start(items) {
        this.items = items;
    } // to a private field
    Start.withATodoListContaining = function (items) {
        return new Start(items);
    };
    Start.prototype.performAs = function (actor) {
        return actor.attemptsTo();
    };
    return Start;
}());
exports.Start = Start;
//# sourceMappingURL=start.js.map