/**
 * @author coolkeychen
 * @date 2018/10/23
 * @Description: htmlEscape
 */


function htmlEscape(text) {
    return text.replace(/[<>"&]/g,function (match,pos,originalText) {
        console.log(match);
        switch (match) {
            case "<":
                return "&lt;";
            case ">":
                return "&gt;";
            case "&":
                return "&amp;";
            case "\"":
                return "&quot;";
        }
    })

}

console.log(htmlEscape("<p class=\"greeting\">Hello World</p>"));