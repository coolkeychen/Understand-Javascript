function Animal(login) {
    this.login = login;
    this.sayHi = function () {
        console.log(this.login);
    }
}

var doggy = new Animal('john');
setTimeout(function() {
    doggy.sayHi()
},1000);