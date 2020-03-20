class Department {
  constructor(
    public name: string,
    private readonly id: string,
    protected employees: string[] = []
  ) {}

  describe(this: Department) {
    console.log('Department: ' + this.name + ' ' + this.id);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, private admins: string[], private lastBug: string[]) {
    super(id, 'IT');
  }

  get mostRecentBug() {
    if (this.lastBug) {
      return this.lastBug;
    }
    throw new Error('No bug found');
  }

  set mostRecentBug(value: any) {
    this.addBug(value);
  }

  addBug(value: string) {
    this.lastBug.push(value);
  }

  addEmployee(this: ITDepartment, name: string) {
    if (name === 'Romain') {
      return;
    }
    this.employees.push(name);
  }

  addAdmins(this: ITDepartment, admin: string) {
    this.admins.push(admin);
  }

  printAdmins(this: ITDepartment) {
    console.log(this.admins);
  }
}

// const accounting = new Department('Accounting', 'AC');
// accounting.addEmployee('Romain');
// accounting.printEmployeeInformation();
// accounting.describe();

const it = new ITDepartment('Innovation', ['Roger'], ['BigFoot']);

it.addEmployee('Martin');
it.addEmployee('Yolanda');
it.printEmployeeInformation();
it.describe();
it.addAdmins('Marta');
it.printAdmins();
it.mostRecentBug = 'Biggy';
console.log(it.mostRecentBug);
