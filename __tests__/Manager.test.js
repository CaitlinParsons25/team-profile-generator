const Manager = require('../lib/Manager');

test('creates manager object', () => {
    const manager = new Manager('Cait', 1, 'cait@cait.com', 2);

    expect(manager.name).toBe('Cait');
    expect(manager.id).toBe(1);
    expect(manager.email).toBe('cait@cait.com');
    expect(manager.officeNumber).toBe(2);
});

test('gets manager info', () => {
    const manager = new Manager('Cait', 1, 'cait@cait.com', 2);

    expect(manager.getName()).toBe('Cait');
    expect(manager.getId()).toBe(1);
    expect(manager.getEmail()).toBe('cait@cait.com');
});
