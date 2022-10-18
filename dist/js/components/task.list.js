import { Component } from './component.js';
export class TaskList extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
        this.template = '';
        this.template = this.createTemplate();
        this.renderAdd(this.selector, this.template);
    }
    createTemplate() {
        return `<section><h2>Tareas</h2></section>`;
    }
}
