export abstract class Component {
    //constructor(public selector: string, public template: string) {}
    render(selector: string, template: string) {
        const element = document.querySelector(selector);
        if (element === null) return;
        element.innerHTML = template;
    }
    renderOuter(selector: string, template: string) {
        const element = document.querySelector(selector);
        if (element === null) return;
        element.outerHTML = template;
    }
}
