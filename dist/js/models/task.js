export class Task {
    constructor(title, responsible) {
        this.title = title;
        this.responsible = responsible;
        this.id = Task.createId();
        this.isComplete = false;
    }
    static createId() {
        return Math.round(Math.random() * 1000000);
    }
}
// const tasks2: ITask[] = [
//     { title: 'Dormir', responsible: 'Pepe', isComplete: false },
// ];
