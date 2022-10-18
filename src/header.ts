import { Component } from './component.js';

export class Header extends Component {
    template = '';
    constructor(public selector: string) {
        super();
        this.template = `<header><h1>To Do List</h1></header>`;
        this.render(this.selector, this.template);
    }
}
