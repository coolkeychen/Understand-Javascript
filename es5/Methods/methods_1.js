var xiaoming = {
    name:'xiaoming',
    birth: 1989,
    age: function () {
        var  y = new Date().getFullYear();
        return y-this.birth;
    }
}

console.log(xiaoming.name);
console.log(xiaoming.age());
