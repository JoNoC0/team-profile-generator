// import employee constructor
const Employee = require("./Employee");

// engineer constructor exteds employee constructor
class Engineer extends Employee {
    constructor(name, id, email, github) {
        // calling employee constructor
        super(name, id, email)
        this.github = github;
    }
    // returning github from input
    getGithub() {
        return 'github';
    }
    // override employee role to engineer
    getRole() {
        return 'Engineer';
    }
}
// to be exported
module.exports = Engineer;