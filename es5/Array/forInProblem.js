var a = ['A','B','C'];

a.name = 'Hello';

for(var x in a) {
    console.log(x)
}

for (var x of a) {
    console.log(x);
}