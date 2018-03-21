function foo(a, b, ...rest) {
    console.log('a = ' + a);
    console.log('b = ' + b );
    console.log(rest);
}

foo('a',3,2,'z')

function sum(...rest) {
    let x = rest.shift();
    return x ? x+sum(...rest):0;

}

console.log(sum(1,2,35,6,7));