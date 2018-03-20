var xiaoming = {
    name: '小明',
    birth: 1990,
    school: 'No.1 Middle School',
    height: 1.70,
    weight: 65,
    score: null
};

console.log(xiaoming.name);

xiaoming.age = 18;

console.log(xiaoming);

console.log('name' in xiaoming);
console.log('toString' in xiaoming);

console.log(xiaoming.hasOwnProperty('age'));
