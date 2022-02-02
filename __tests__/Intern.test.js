const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Rey');
});

test('set school with constructor', () => {
    const testing = 'Rutgers';
    const newCon = new Intern('Rey', 1, 'reyintern@email.com', testing);
    expect(newCon.school).toBe(testing);
});
