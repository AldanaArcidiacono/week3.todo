import { Component } from './component.js';
export class AddTask extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
        this.template = this.createTemplate();
        this.renderOuter(this.selector, this.template);
    }
    createTemplate() {
        return `<form>
            <div>
                <input
                    type="text"
                    id="title"
                    placeholder="Cual es la tarea"
                    required
                />
            </div>

            <div>
                <input
                    type="text"
                    id="resp"
                    placeholder="Quien es el responsable"
                />
            </div>
            <button type="submit">Añadir tarea</button>
        </form>;`;
    }
}
