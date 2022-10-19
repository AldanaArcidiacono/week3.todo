import { TASKS } from '../models/data.js';
import { Task } from '../models/task.js';
import { Store } from '../services/storage.js';
import { AddTask } from './add.task.js';
import { Component } from './component.js';
import { ItemTask } from './item.task.js';
export class TaskList extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
        this.storeService = new Store();
        if (this.storeService.getStore().length === 0) {
            this.tasks = [...TASKS];
            this.storeService.setStore(this.tasks);
        }
        else {
            this.tasks = this.storeService.getStore();
        }
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
        this.tasks.forEach((item) => {
            template += new ItemTask('', item, this.handlerEraser.bind(this), this.handlerComplete.bind(this)).template;
        });
        template += `</ul>
            </section>`;
        return template;
    }
    handleAdd(ev) {
        //ev.preventDefault();
        const title = document.querySelector('#title')
            .value;
        const responsible = document.querySelector('#resp').value;
        this.tasks.push(new Task(title, responsible));
        this.storeService.setStore(this.tasks);
        this.manageComponent();
    }
    handlerEraser(deletedId) {
        this.tasks = this.tasks.filter((item) => item.id !== deletedId);
        this.storeService.setStore(this.tasks);
        this.manageComponent();
    }
    handlerComplete(changeId) {
        const i = this.tasks.findIndex((item) => item.id === changeId);
        this.tasks[i].isComplete = !this.tasks[i].isComplete;
        this.storeService.setStore(this.tasks);
    }
}
