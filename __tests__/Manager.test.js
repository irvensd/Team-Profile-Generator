const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Ramon');
});

test('set office number with constructor', () => {
    const testing = 10;
    const newCon = new Manager('ramon', 1, 'ramonmanager@email.com', testing);
    expect(newCon.officeNumber).toBe(testing);
});
