const mathModule = require("./mathModule/fourOperations");

try {
    // a) 1 + 1
    console.log("result of item a) "+mathModule["+"](1,1));

    // b) -123 + 123123
    console.log("result of item b) "+mathModule["+"](-123,123123));

    // c) 8 * 0
    console.log("result of item c) "+mathModule["*"](8,0));

    // d) 1239123 * 12313
    console.log("result of item d) "+mathModule["*"](1239123,12313));

    // e) 123 / -12
    console.log("result of item e) "+mathModule["/"](123,-12));

    // f) 313123 / 0
    console.log("result of item f) "+mathModule["/"](313123,0));

    // extra "10a" + 3 (is never executed because the previous error is caught)
    console.log("result of item extra) "+mathModule["/"]("10a",3));

} catch (error) {
    console.log("Error: "+error);
}

console.log("Another way..............................");

mathModule.exec=function(operation,n1,n2) {
    const msg="The result of the \""+operation+"\" operation with operands \""+n1+"\" and \""+n2+"\" is: "
    try {
        console.log(msg+mathModule[operation](n1,n2));
    } catch (error) {
        console.log(msg+error);
    }
};

// a) 1 + 1
mathModule.exec("+",1,1);

// b) -123 + 123123
mathModule.exec("+",-123,123123);

// c) 8 * 0
mathModule.exec("*",8,0);

// d) 1239123 * 12313
mathModule.exec("*",1239123,12313);

// e) 123 / -12
mathModule.exec("/",123,-12);

// f) 313123 / 0
mathModule.exec("/",313123,0);

// extra "10a" + 3 
mathModule.exec("/","10a",3);