const Intern = require('../lib/Intern');

test('creates intern object', () => {
    const intern = new Intern('Cait', 1, 'cait@cait.com', 'UT');

    expect(intern.name).toBe('Cait');
    expect(intern.id).toBe(1);
    expect(intern.email).toBe('cait@cait.com');
    expect(intern.school).toBe('UT');
});

test('gets intern info', () => {
    const intern = new Intern('Cait', 1, 'cait@cait.com', 'UT');

    expect(intern.getName()).toBe('Cait');
    expect(intern.getId()).toBe(1);
    expect(intern.getEmail()).toBe('cait@cait.com');
    expect(intern.getSchool()).toBe('UT');
});
