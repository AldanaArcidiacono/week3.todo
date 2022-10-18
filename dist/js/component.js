export class Component {
    //constructor(public selector: string, public template: string) {}
    render(selector, template) {
        const element = document.querySelector(selector);
        if (element === null)
            return;
        element.innerHTML = template;
    }
    renderOuter(selector, template) {
        const element = document.querySelector(selector);
        if (element === null)
            return;
        element.outerHTML = template;
    }
}
