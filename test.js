const Employee = require("./employee")

// Your code here

const JohnWick = new Employee("John Wick", "Dog Lover")

setTimeout(JohnWick.sayName.bind(JohnWick), 2000);

setTimeout(JohnWick.sayOccupation.bind(JohnWick), 3000);
