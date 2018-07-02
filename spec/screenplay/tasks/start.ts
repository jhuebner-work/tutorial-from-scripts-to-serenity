import { PerformsTasks, Task } from 'serenity-js/protractor';

export class Start implements Task {

    static withATodoListContaining(items: string[]) {       // static method to improve the readability
        return new Start(items);
    }

    performAs(actor: PerformsTasks): PromiseLike<void> {    // required by the Task interface
        return actor.attemptsTo(                            // delegates the work to lower-level tasks
            // todo: add each item to the Todo List
        );
    }

    constructor(private items: string[]) {                  // constructor assigning the list of items
    }                                                       // to a private field
}
