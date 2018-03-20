function A(callback) {
    callback();
    console.log('我是主函数！');
}


function B() {
    setTimeout(function () {
        console.log('我是回调函数');
    },1000);
}

A(B);