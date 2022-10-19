import { Task } from '../models/task.js';
import { Component } from './component.js';

export class ItemTask extends Component {
    template!: string;
    constructor(
        public selector: string,
        public item: Task,
        public handelDelete: (id: number) => void
    ) {
        super();
        this.manageComponent();
    }

    manageComponent() {
        this.template = this.createTemplate();
        this.renderAdd(this.selector, this.template);
        setTimeout(() => {
            (
                document.querySelector(`#i${this.item.id}`) as HTMLElement
            ).addEventListener('click', () => {
                this.handelDelete(this.item.id);
            });
        }, 100);
    }

    createTemplate() {
        return `<li> ${this.item.id} - ${this.item.title} 
            <span id="i${this.item.id}" data-id="${this.item.id}">🗑️</span>
            </li>`;
    }
}
