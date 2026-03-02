// Base Class: Employee
class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }
    describe() {
        return `${this.name} works in the ${this.department} department.`;
    }
}

// Create Manager Class
class Manager extends Employee {
    constructor(name, department, teamSize) {
        super(name, department);
        this.teamSize = teamSize;
    }
    describe() {
        return `${this.name}manager from ${this.department} department manages a team of ${this.teamSize} people.`; 
    }   
}

//Company Class 
class Company {
    constructor(name) {
        this.Employees = [];

    }

    // Add Employee to Company
    addEmployee(employee) {
            this.Employees.push(employee);
    }

    //List all Employees in the Company
    listEmployees() {
        console.log(`Employees in ${this.name} Company:`);
        this.Employees.forEach(employee => {
            console.log(employee.describe());
        });
    }
}

//Testing the implementation
//Employees and Managers
const emp1 = new Employee("Alice", "Operations");
const emp2 = new Employee("Bob", "Marketing");
const manager1 = new Manager("Charlie", "Operations", 5);
const manager2 = new Manager("Diana", "Marketing", 3);

// Describe Employees and Managers
console.log(emp1.describe());
console.log(emp2.describe());
console.log(manager1.describe());
console.log(manager2.describe());

//Company Instance
const myCompany = new Company();

// Employees and Managers added to the Company
myCompany.addEmployee(emp1);
myCompany.addEmployee(emp2);
myCompany.addEmployee(manager1);
myCompany.addEmployee(manager2);

// List all Employees in the Company
myCompany.listEmployees();