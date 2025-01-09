const findTheOldest = function(people) {
    let oldestObject = [];
    let nameOfOldest = "";
    let age = [];
    const date = new Date();
    const currentYear = date.getFullYear();
    let oldestAge = 0;
    for (let i = 0; i <= people.length - 1; i++) {
        if (people[i].yearOfDeath) {
            age.push(people[i].yearOfDeath - people[i].yearOfBirth);
        } else {
            age.push(currentYear - people[i].yearOfBirth);
        }
    }
    for (let x in age) {
        if (age[x] > oldestAge) {
            oldestAge = age[x];
            nameOfOldest = people[x].name;
        }
    }
    for (let j = 0; j <= people.length - 1; j++) {
        if (people[j].name == nameOfOldest) {
            oldestObject = people[j];
        }
    }
    return oldestObject;
};

// Do not edit below this line
module.exports = findTheOldest;
