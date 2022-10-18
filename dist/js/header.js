import { Component } from './component.js';
export class Header extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
        this.template = '';
        this.template = `<header><h1>To Do List</h1></header>`;
        this.render(this.selector, this.template);
    }
}
