const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('David');
});

test('set github account with constructor', () => {
    const testing = 'GitHubAccount';
    const newCon = new Engineer('david', 1, 'davidengineer@email.com', testing);
    expect(newCon.github).toBe(testing);
})