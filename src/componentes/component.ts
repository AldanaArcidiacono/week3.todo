export abstract class Component {
    //constructor(public selector: string, public template: string) {}
    render(selector: string, template: string) {
        const element = document.querySelector(selector);
        if (element === null) return;
        element.innerHTML = template; // Inner = a template, lo reemplaza
    }
    renderOuter(selector: string, template: string) {
        const element = document.querySelector(selector);
        if (element === null) return;
        element.outerHTML = template;
    }
    renderAdd(selector: string, template: string) {
        const element = document.querySelector(selector);
        if (element === null) return;
        element.innerHTML += template; // Añade lo que haga falta
    }
}
