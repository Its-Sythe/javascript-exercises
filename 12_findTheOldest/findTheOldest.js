const findTheOldest = function(people) {
    let age;
    const date = new Date();
    const currentYear = date.getFullYear();
    let oldestAge = 0;
    for (let i = 0; i <= people.length - 1; i++) {
        if (people[i].yearOfDeath) {
            age = people[i].yearOfDeath - people[i].yearOfBirth;
        } else {
            age = currentYear - people[i].yearOfBirth;
        }
       if (age > oldestAge) {
        oldestAge = age;
       }
    }
    return oldestAge;
};

// Do not edit below this line
module.exports = findTheOldest;
