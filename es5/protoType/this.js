/*
let username = '守候';
function fn() {
    alert(this.username);
}

fn();*/

window.username = '守候';
function fn() {
    alert(this.username);
}
fn();
