export class Employee {
    constructor(id,salary) {
    this.id = id;
    this.salary = salary;
}

static compareSalary(userOne, userSecond)
{
    if (userOne.salary > userSecond.salary)
    {
        return userOne + ' has greater salary';
    }
    else if (userSecond.salary > userOne.salary)
    {
        return userSecond + ' has greater salary';
    }
    else
    {
        return "salaries are equal";
    }

}

}