import { PerformsTasks, Task } from 'serenity-js/protractor';
export declare class Start implements Task {
    private items;
    static withATodoListContaining(items: string[]): Start;
    performAs(actor: PerformsTasks): PromiseLike<void>;
    constructor(items: string[]);
    private addAll(items);
}
