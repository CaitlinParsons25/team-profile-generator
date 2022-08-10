const Engineer = require('../lib/Engineer');

test('creates engineer object', () => {
    const engineer = new Engineer('Cait', 1, 'cait@cait.com', 'cait25');

    expect(engineer.name).toBe('Cait');
    expect(engineer.id).toBe(1);
    expect(engineer.email).toBe('cait@cait.com');
    expect(engineer.github).toBe('cait25');
});

test('gets engineer info', () => {
    const engineer = new Engineer('Cait', 1, 'cait@cait.com', 'cait25');

    expect(engineer.getName()).toBe('Cait');
    expect(engineer.getId()).toBe(1);
    expect(engineer.getEmail()).toBe('cait@cait.com');
    expect(engineer.getGithub()).toBe('cait25');
});
