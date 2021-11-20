
const Employee = require('../lib/Employee')

describe('Employee', () => {
    it('creates employee object', () => {
        const employee = new Employee('John', 1, 'JohnDoe@email.com') 
        

        expect(employee.name).toBe('John')
        expect(employee.id).toBe(1)
        expect(employee.email).toBe('JohnDoe@email.com')
    })
}) 

