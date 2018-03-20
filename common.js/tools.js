
var tools = {
    add :function (x,y) {
        return x + y;
    },
    sayHello:function () {
        return 'hello.js';
    }

}
// module.exports= tools;
exports.tools = tools;