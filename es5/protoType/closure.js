/*
*
* 闭包作用：
* 1、局部变量在函数执行完毕不会被销毁，回收，而是继续保存在内存里（延续变量周期）
* 2、创建局部变量，保护局部变量不会被访问和修改
*
* */
let add =(function () {
    let now = 0;
    return {
        doAdd:function () {
            now++;
            console.log(now);
        }
    }
})();

add.doAdd();
add.doAdd();
add.doAdd();
