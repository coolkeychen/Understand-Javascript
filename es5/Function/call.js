/**
 * @author coolkeychen
 * @date 2018/10/22
 * @Description: call
 */


global.color = "red";
var o = {color: "blue"};

function sayColor() {
    console.log(this.color);
}

sayColor.call(this);
sayColor.call(global);
sayColor.call(o);
