const mathModule = require("./mathModule/fourOperations");

try {
    // a) 1 + 1
    console.log("result of item a) "+mathModule.add(1,1));

    // b) -123 + 123123
    console.log("result of item b) "+mathModule.add(-123,123123));

    // c) 8 * 0
    console.log("result of item c) "+mathModule.mult(8,0));

    // d) 1239123 * 12313
    console.log("result of item d) "+mathModule.mult(1239123,12313));

    // e) 123 / -12
    console.log("result of item e) "+mathModule.div(123,-12));

    // f) 313123 / 0
    console.log("result of item f) "+mathModule.div(313123,0));

    // extra "10a" + 3 (is never executed because the previous error is caught)
    console.log("result of item extra) "+mathModule.div("10a",3));

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
mathModule.exec("add",1,1);

// b) -123 + 123123
mathModule.exec("add",-123,123123);

// c) 8 * 0
mathModule.exec("mult",8,0);

// d) 1239123 * 12313
mathModule.exec("mult",1239123,12313);

// e) 123 / -12
mathModule.exec("div",123,-12);

// f) 313123 / 0
mathModule.exec("div",313123,0);

// extra "10a" + 3 
mathModule.exec("div","10a",3);