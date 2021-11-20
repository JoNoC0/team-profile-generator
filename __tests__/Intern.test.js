const Intern = require('./lib/Intern');

describe('Intern', () => {
    it('creates intern object', () => {

    const intern = new Intern('name', 1, 'email', 'school');

    expect(intern.name).toBe('name')
    expect(intern.id).toBe(1)
    expect(intern.email).toBe('email')
    expect(intern.school).toBe('school')
    })
})