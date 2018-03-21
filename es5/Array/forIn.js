var arr = ['Apple','Google','Microsoft'];

for(var key in arr) {
    console.log(key);
    console.log(arr[key]);
}

var xiaoming = {
    age:18,
    height: '175cm',
    weight: '75KG',
    city: 'Xiamen'
}

for(let key in xiaoming) {
    if (xiaoming.hasOwnProperty(key)) {
        console.log(key);
        console.log(xiaoming[key]);
    }
}
