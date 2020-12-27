// bind()
Function.prototype.mybind = function (){
    let slice = Array.prototype.slice;
    let context = this;

    if( typeof(this) != 'function' ){
        throw new TypeError("mybind expect method need to pass.")
    }

    let thatArgs = arguments[0];
    let args = slice.call(arguments, 1);
    return function () {
        return context.apply(thatArgs,[...args,...arguments])
    }
 }