import { TASKS } from '../models/data.js';
import { Task } from '../models/task.js';
import { AddTask } from './add.task.js';
import { Component } from './component.js';

export class TaskList extends Component {
    template = '';
    constructor(public selector: string) {
        super();
        this.manageComponent();
    }
    manageComponent() {
        this.template = this.createTemplate();
        this.renderAdd(this.selector, this.template);
        new AddTask('slot#add-task');
        setTimeout(() => {
            document
                .querySelector('form')
                ?.addEventListener('submit', this.handleAdd.bind(this));
        }, 1000);
    }
    createTemplate() {
        let template = `<section><h2>Tareas</h2><slot id="add-task"></slot><ul>`;
        TASKS.forEach((item: Task) => {
            template += `<li> ${item.id} - ${item.title}<li>`;
        });

        template += `</ul></section>`;
        return template;
    }
    handleAdd(ev: Event) {
        ev.preventDefault();
        if (document.querySelector('#title')) return;
        const title = (document.querySelector('#title') as HTMLInputElement)
            .value;
        const responsible = (
            document.querySelector('#resp') as HTMLInputElement
        ).value;
        TASKS.push(new Task(title, responsible));
        console.log(TASKS);
        this.manageComponent();
    }
}
