export default function sortBySalary(users) {
    return users.sort((a,b) => {
        if (a.salary === b.salary) {
            return a.id - b.id;
        }
        else {
            a.salary-b.salary
        } 
    }
    )
}