const findTheOldest = function (arr) {
    const oldest = arr.sort(function (a, b) {
        // const last = a.yearOfDeath - a.yearOfBirth;
        // const next = b.yearOfDeath - b.yearOfBirth;
        const d = new Date();
        const year = d.getFullYear();
        if (!a.yearOfDeath && !b.yearOfDeath) {
            let last = year - a.yearOfBirth;
            let next = year - b.yearOfBirth;
            if (last > next) {
                return -1;
            } else {
                return 1;
            }
        } else if (!a.yearOfDeath && b.yearOfDeath) {
            let last = year - a.yearOfBirth;
            let next = b.yearOfDeath - b.yearOfBirth;
            if (last > next) {
                return -1;
            } else {
                return 1;
            }
        } else if (a.yearOfDeath && !b.yearOfDeath) {
            let last = a.yearOfDeath - a.yearOfBirth;
            let next = year - b.yearOfBirth;
            if (last > next) {
                return -1;
            } else {
                return 1;
            }
        } else {
            let last = a.yearOfDeath - a.yearOfBirth;
            let next = b.yearOfDeath - b.yearOfBirth;
            if (last > next) {
                return -1;
            } else {
                return 1;
            }
        }
        
    }); return oldest[0]
};

// Do not edit below this line
module.exports = findTheOldest;
