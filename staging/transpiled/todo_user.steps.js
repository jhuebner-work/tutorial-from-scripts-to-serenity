"use strict";
var protractor_1 = require("serenity-js/protractor");
module.exports = function todoUserSteps() {
    var actor;
    this.setDefaultTimeout(30 * 1000); // The todomvc.com website can sometimes be a bit slow to load, so we tell
    // Cucumber to give it up to 30 seconds to get ready.
    this.Given(/^.*that (.*) has a todo list containing (.*)$/, function (actorName, items, callback) {
        actor = protractor_1.Actor.named(actorName);
        callback();
    });
    this.When(/^s?he adds (.*?) to (?:his|her) list$/, function (itemName, callback) {
        callback(null, 'pending');
    });
    this.Then(/^.* todo list should contain (.*?)$/, function (items, callback) {
        callback(null, 'pending');
    });
};
//# sourceMappingURL=todo_user.steps.js.map