var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    function Department(name, id, employees) {
        if (employees === void 0) { employees = []; }
        this.name = name;
        this.id = id;
        this.employees = employees;
    }
    Department.prototype.describe = function () {
        console.log('Department: ' + this.name + ' ' + this.id);
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins, lastBug) {
        var _this = _super.call(this, id, 'IT') || this;
        _this.admins = admins;
        _this.lastBug = lastBug;
        return _this;
    }
    Object.defineProperty(ITDepartment.prototype, "mostRecentBug", {
        get: function () {
            if (this.lastBug) {
                return this.lastBug;
            }
            throw new Error('No bug found');
        },
        set: function (value) {
            this.addBug(value);
        },
        enumerable: true,
        configurable: true
    });
    ITDepartment.prototype.addBug = function (value) {
        this.lastBug.push(value);
    };
    ITDepartment.prototype.addEmployee = function (name) {
        if (name === 'Romain') {
            return;
        }
        this.employees.push(name);
    };
    ITDepartment.prototype.addAdmins = function (admin) {
        this.admins.push(admin);
    };
    ITDepartment.prototype.printAdmins = function () {
        console.log(this.admins);
    };
    return ITDepartment;
}(Department));
// const accounting = new Department('Accounting', 'AC');
// accounting.addEmployee('Romain');
// accounting.printEmployeeInformation();
// accounting.describe();
var it = new ITDepartment('Innovation', ['Roger'], ['BigFoot']);
it.addEmployee('Martin');
it.addEmployee('Yolanda');
it.printEmployeeInformation();
it.describe();
it.addAdmins('Marta');
it.printAdmins();
it.mostRecentBug = 'Biggy';
console.log(it.mostRecentBug);
