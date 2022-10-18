import { Component } from './component.js';

export class Footer extends Component {
    template = '';
    constructor(public selector: string) {
        super();
        this.template = this.createTemplate();
        this.renderAdd(this.selector, this.template);
    }
    createTemplate() {
        return `<footer><address>ISDI CODERS</address></footer>`;
    }
}
