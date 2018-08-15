import {AssertionError} from 'chai';
import { protractor } from 'protractor';
import {passBoolean} from 'protractor/built/util';
import { Actor, BrowseTheWeb } from 'serenity-js/protractor';
import { expect } from '../../spec/expect';
import { TodoList } from '../../spec/screenplay/components/todo_list';
import { AddATodoItem } from '../../spec/screenplay/tasks/add_a_todo_item';
import { Start } from '../../spec/screenplay/tasks/start';
import { listOf } from '../../spec/text';

export = function todoUserSteps() {

    let actor: Actor;

    this.setDefaultTimeout(5 * 1000);  // The todomvc.com website can sometimes be a bit slow to load, so we tell
                                        // Cucumber to give it up to 30 seconds to get ready.

    this.Given(/^.*that (.*) has a todo list containing (.*)$/, function(actorName: string, items: string) {
        actor = Actor.named(actorName).whoCan(BrowseTheWeb.using(protractor.browser));

        return actor.attemptsTo(
            Start.withATodoListContaining(listOf(items)),
        );

    });

    this.Given(/^.*that (.*) is on stage$/, function(actorName: string) {
        actor = Actor.named(actorName).whoCan(BrowseTheWeb.using(protractor.browser));
    });

    this.When(/^he adds (.*?) to his list$/, (itemName: string) => {
        return actor.attemptsTo(
            AddATodoItem.called(itemName),
        );

    });

    this.Then(/^.* todo list should contain (.*?)$/, (items: string) => {
        return expect(actor.toSee(TodoList.Items_Displayed)).eventually.deep.equal(listOf(items));

    });


    this.When(/^he expects false is true$/, () => {
        return expect(actor.toSee(TodoList.Items_Displayed)).eventually.deep.equal(listOf('Nope, Never'));
    });

    this.When(/^he expects false to equal true$/, () => {
        return expect(false).equal(true);
    });

    this.When(/^he expects false to eventually equal true$/, () => {
        return expect(false).eventually.equal(true);
    });

    this.When(/^he throws fail$/, () => {
        throw new Error('fail');
    });

    this.When(/^he uses passBoolean $/, () => {
        return passBoolean(false);
    });

    this.When(/^he rejects a promise$/, () => {
        return Promise.reject('Failure');
    });

    this.When(/^he returns an AssertionError$/, () => {
         return new AssertionError('Failure');
    });

    this.When(/^he rejects this$/, () => {
        this.reject('this.reject');
    });

};
