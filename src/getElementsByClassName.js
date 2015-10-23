// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
//You should use document.body, element.childNodes, and element.classList
var getElementsByClassName = function(className, element) {
    var output = [];
    element = element || document.body;

    if (element.classList) {
        if (element.classList.contains(className)) {
            output.push(element);
        }
    }

    for (var i = 0; i < element.childNodes.length; i++) {
        output = output.concat(getElementsByClassName(className, element.childNodes[i]));
    }

    return output;
};
