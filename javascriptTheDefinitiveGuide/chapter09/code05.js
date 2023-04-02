function typeAndValue(x){
    if(x == null) return ""; // null or undefined
    switch(x.constructor){
        case Number: return "Number: " + x;
        case String: return "String: " + x;
        case Boolean: return "Boolean: " + x;
        case Date: return "Date: " + x;
        case RegExp: return "RegExp: " + x;
        default:return x.constructor + ": " + x;
    }
}