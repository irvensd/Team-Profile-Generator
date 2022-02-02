const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Irvens');
});

test('set id with constructor', () => {
    const testing = 50;
    const newCon = new Employee('Irvens', testing);
    expect(newCon.id).toBe(testing);
});
