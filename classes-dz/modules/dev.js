import { Employee } from "./employee.js";
export class Dev extends Employee {
    #jobType = "Dev";
    constructor(id, salary) {
        super(id, salary);
    }
    getJobType(){
        return `I am a ${this.#jobType}`;
  }

  static returnArrayOfDevs(...args){
    const developers = [];
    for (let arg of args) {
        if(arg instanceof Dev) {
            developers.push(arg);
        }
    }
    return developers;
  }
}
