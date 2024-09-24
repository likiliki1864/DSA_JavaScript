let numbers = [1, 2, 3, 4, 5];
let Names = ['Likith', 'Bharath', 'Sujan'];

Names.push('grape');
console.log('push:', Names);

Names.pop();
console.log('pop:', Names);

Names.shift();
console.log('shift:', Names);

Names.unshift('Likith');
console.log('unshift:', Names);

let moreNames = ['Arjun', 'Lohit'];
let allNames = Names.concat(moreNames);
console.log('concat:', allNames);

let slicedNames = allNames.slice(1, 3);
console.log('slice:', slicedNames);

allNames.splice(2, 1, 'Bhuvan');
console.log('splice (remove and add):', allNames);

let Namestring = allNames.join(' - ');
console.log('join:', Namestring);

let reversedNames = allNames.reverse();
console.log('reverse:', reversedNames);

let sortedNumbers = numbers.sort((a, b) => b - a);
console.log('sort:', sortedNumbers);

let indexOfKiwi = allNames.indexOf('kiwi');
console.log('indexOf:', indexOfKiwi);

let hasBharath = allNames.includes('Bharath');
console.log('includes:', hasBharath);

console.log('forEach:');
allNames.forEach((fruit, index) => console.log(index, fruit));

let doubledNumbers = numbers.map(num => num * 2);
console.log('map (double numbers):', doubledNumbers);

let largeNumbers = numbers.filter(num => num > 3);
console.log('filter (numbers > 3):', largeNumbers);

let sum = numbers.reduce((total, num) => total + num, 0);
console.log('reduce (sum):', sum);

let firstLargeNumber = numbers.find(num => num > 3);
console.log('find (first number > 3):', firstLargeNumber);
