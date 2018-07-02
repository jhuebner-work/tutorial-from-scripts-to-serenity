import { Actor, BrowseTheWeb } from 'serenity-js/protractor';
import { AddATodoItem } from '../../spec/screenplay/tasks/add_a_todo_item';
import { Start } from '../../spec/screenplay/tasks/start';
import { listOf } from '../../spec/text';
import { protractor } from 'protractor';

export = function todoUserSteps() {

    let actor: Actor;

    this.setDefaultTimeout(30 * 1000);  // The todomvc.com website can sometimes be a bit slow to load, so we tell
                                        // Cucumber to give it up to 30 seconds to get ready.

    this.Given(/^.*that (.*) has a todo list containing (.*)$/, function(actorName: string, items: string, callback) {
        actor = Actor.named(actorName).whoCan(BrowseTheWeb.using(protractor.browser));

        actor.attemptsTo(
            Start.withATodoListContaining(listOf(items)),
        );

    });

    this.When(/^s?he adds (.*?) to (?:his|her) list$/, function(itemName: string, callback) {
        callback(null, 'pending');
    });

    this.Then(/^.* todo list should contain (.*?)$/, function(items: string, callback) {
        callback(null, 'pending');
    });

    this.When(/^he adds (.*?) to his list$/, (itemName: string) => {
        return actor.attemptsTo(
            AddATodoItem.called(itemName)
        );
    });
};
