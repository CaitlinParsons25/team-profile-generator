const Employee = require('../lib/Employee');

test('creates employee object', () => {
    const employee = new Employee('Cait', 1, 'cait@cait.com');

    expect(employee.name).toBe('Cait');
    expect(employee.id).toBe(1);
    expect(employee.email).toBe('cait@cait.com');
});

test('gets employee info', () => {
    const employee = new Employee('Cait', 1, 'cait@cait.com');

    expect(employee.getName()).toBe('Cait');
    expect(employee.getId()).toBe(1);
    expect(employee.getEmail()).toBe('cait@cait.com');
});
