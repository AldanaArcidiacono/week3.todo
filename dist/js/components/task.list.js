import { TASKS } from '../models/data.js';
import { Task } from '../models/task.js';
import { AddTask } from './add.task.js';
import { Component } from './component.js';
export class TaskList extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
        this.template = '';
        this.manageComponent();
    }
    manageComponent() {
        this.template = this.createTemplate();
        this.renderAdd(this.selector, this.template);
        new AddTask('slot#add-task');
        setTimeout(() => {
            var _a;
            (_a = document
                .querySelector('form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', this.handleAdd.bind(this));
        }, 1000);
    }
    createTemplate() {
        let template = `<section><h2>Tareas</h2><slot id="add-task"></slot><ul>`;
        TASKS.forEach((item) => {
            template += `<li> ${item.id} - ${item.title}<li>`;
        });
        template += `</ul></section>`;
        return template;
    }
    handleAdd(ev) {
        ev.preventDefault();
        if (document.querySelector('#title'))
            return;
        const title = document.querySelector('#title')
            .value;
        const responsible = document.querySelector('#resp').value;
        TASKS.push(new Task(title, responsible));
        console.log(TASKS);
        this.manageComponent();
    }
}
