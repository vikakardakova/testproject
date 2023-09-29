import { Employee } from "./employee.js";

export class PM extends Employee {
    #jobType = "PM";
    constructor(id, salary) {
        super(id, salary);
    }

    getJobType() {
        return `I am a ${this.#jobType}`;
    }
}