import { TASKS } from '../models/data.js';
import { Task } from '../models/task.js';
import { AddTask } from './add.task.js';
import { Component } from './component.js';
import { ItemTask } from './item.task.js';

export class TaskList extends Component {
    template!: string;
    tasks = [...TASKS];
    constructor(public selector: string) {
        super();
        this.manageComponent();
    }
    manageComponent() {
        this.template = this.createTemplate();
        this.render(this.selector, this.template);
        new AddTask('slot#add-task', this.handleAdd.bind(this));
    }

    createTemplate() {
        let template = `<section>
                <h2>Tareas</h2>
                <slot id="add-task"></slot>
                <ul>`;
        this.tasks.forEach((item: Task) => {
            template += new ItemTask('', item, this.handlerEraser.bind(this))
                .template;
        });
        template += `</ul>
            </section>`;
        return template;
    }

    handleAdd(ev: Event) {
        //ev.preventDefault();
        const title = (document.querySelector('#title') as HTMLInputElement)
            .value;
        const responsible = (
            document.querySelector('#resp') as HTMLInputElement
        ).value;
        this.tasks.push(new Task(title, responsible));
        this.manageComponent();
    }

    handlerEraser(deletedId: number) {
        this.tasks = this.tasks.filter((item) => item.id !== deletedId);
        this.manageComponent();
    }
}
