import { Component } from './component.js';
export class ItemTask extends Component {
    constructor(selector, item, handelDelete) {
        super();
        this.selector = selector;
        this.item = item;
        this.handelDelete = handelDelete;
        this.manageComponent();
    }
    manageComponent() {
        this.template = this.createTemplate();
        this.renderAdd(this.selector, this.template);
        setTimeout(() => {
            document.querySelector(`#i${this.item.id}`).addEventListener('click', () => {
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
