 function parent(ele) {
    return ele.parentElement;
}

 function prev(ele) {
    return ele.previousElementSibling;
}
 function next(ele) {
    return ele.nextElementSibling;
}
module.exports = {
    parent,
    prev,
    next,
}
