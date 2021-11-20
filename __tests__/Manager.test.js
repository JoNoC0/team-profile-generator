const Manager = require('../lib/Manager')

describe('Manager', () => {
    it('creates manaager object', () => {
        const manager = new Manager('John', 1, 'JohnDoe@email.com', 1111) 
        

        expect(manager.name).toBe('John')
        expect(manager.id).toBe(1)
        expect(manager.email).toBe('JohnDoe@email.com')
        expect(manager.officeNumber).toBe(1111)
    })
}) 