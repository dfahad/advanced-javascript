const nums = [11, 42, 23, 14, 15, 66, 17, 28];

const part = nums.slice(2,5);
// console.log(part);

const remove = nums.splice(2,5);
// console.log(remove);

// console.log(nums);

const together = nums.join(" ")
console.log(together)


/**
 * slice: from [i] to before [i];
 * splice: from [i] to nth number; 
 * slice don't delete [i] from main array;
 * splice deletes [i] from main array; 
 */