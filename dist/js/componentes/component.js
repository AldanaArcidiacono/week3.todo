export class Component {
    //constructor(public selector: string, public template: string) {}
    render(selector, template) {
        const element = document.querySelector(selector);
        if (element === null)
            return;
        element.innerHTML = template; // Inner = a template, lo reemplaza
    }
    renderOuter(selector, template) {
        const element = document.querySelector(selector);
        if (element === null)
            return;
        element.outerHTML = template;
    }
    renderAdd(selector, template) {
        const element = document.querySelector(selector);
        if (element === null)
            return;
        element.innerHTML += template; // Añade lo que haga falta
    }
}
