import { Component } from './component.js';

export class Header extends Component {
    template = '';
    constructor(public selector: string) {
        super();
        this.template = this.createTemplate();
        this.renderAdd(this.selector, this.template);
    }
    createTemplate() {
        return `<header><h1>To Do List</h1></header>`;
    }
}
