export interface ITask {
    title: string;
    responsible: string;
    isComplete: boolean;
}

export class Task {
    id: number;
    isComplete: boolean;
    static createId() {
        return Math.round(Math.random() * 1000000);
    }
    constructor(public title: string, public responsible: string) {
        this.id = Task.createId();
        this.isComplete = false;
    }
}

// const tasks2: ITask[] = [
//     { title: 'Dormir', responsible: 'Pepe', isComplete: false },
// ];
