const person = {
    isHuman:false,
    printIntroduction:function (params) {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
        
    }
}


const me = Object.create(person);
me.name = 'cat';
me.isHuman = true;
me.printIntroduction();