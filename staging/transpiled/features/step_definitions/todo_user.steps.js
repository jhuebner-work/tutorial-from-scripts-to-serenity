"use strict";
var protractor_1 = require("serenity-js/protractor");
var add_a_todo_item_1 = require("../../spec/screenplay/tasks/add_a_todo_item");
var start_1 = require("../../spec/screenplay/tasks/start");
var text_1 = require("../../spec/text");
module.exports = function todoUserSteps() {
    var actor;
    this.setDefaultTimeout(30 * 1000); // The todomvc.com website can sometimes be a bit slow to load, so we tell
    // Cucumber to give it up to 30 seconds to get ready.
    this.Given(/^.*that (.*) has a todo list containing (.*)$/, function (actorName, items, callback) {
        actor = protractor_1.Actor.named(actorName);
        actor.attemptsTo(start_1.Start.withATodoListContaining(text_1.listOf(items)));
    });
    this.When(/^s?he adds (.*?) to (?:his|her) list$/, function (itemName, callback) {
        callback(null, 'pending');
    });
    this.Then(/^.* todo list should contain (.*?)$/, function (items, callback) {
        callback(null, 'pending');
    });
    this.When(/^he adds (.*?) to his list$/, function (itemName) {
        return actor.attemptsTo(add_a_todo_item_1.AddATodoItem.called(itemName));
    });
};
//# sourceMappingURL=todo_user.steps.js.map