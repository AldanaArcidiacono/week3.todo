import { Component } from './component.js';

export class Main extends Component {
    template = '';
    constructor(public selector: string) {
        super();
        this.template = this.createTemplate();
        this.renderAdd(this.selector, this.template);
    }
    createTemplate() {
        return `<main></main>`;
    }
}
