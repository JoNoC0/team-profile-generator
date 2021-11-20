const Engineer = require('../lib/Engineer')

describe('Engineer', () => {
    it('creates engineer object', () => {
        const engineer = new Engineer('John', 1, 'JohnDoe@email.com', 'github') 
        

        expect(engineer.name).toBe('John')
        expect(engineer.id).toBe(1)
        expect(engineer.email).toBe('JohnDoe@email.com')
        expect(engineer.github).toBe('github')
    })
}) 