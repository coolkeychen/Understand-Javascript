function foo(a,b,c) {
    var i ,rest = [];
    if (arguments.length > 2) {
        for(i = 2; i<arguments.length; i++) {
            rest.push(arguments[i]);
        }
    }
    console.log('a = ' + a);
    console.log('b = ' + b );
    console.log(rest);
}

foo('x','z','y');