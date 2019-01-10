/**
 * @author coolkeychen
 * @date 2018/10/23
 * @Description: book1
 */

let book = {};

Object.defineProperties(book,{
    _year: {
        value: 2004
    },
    edition: {
        value :1
    },
    year : {
        get: function () {
            return this._year;
        },
        set:function (newValue) {
            if (newValue > 2004) {
                this._year = newValue;
                this.edition += newValue -2004;
            }
        }
    }
});

var descriptor = Object.getOwnPropertyDescriptor(book,"_year");
console.log(descriptor.value);
console.log(descriptor);

