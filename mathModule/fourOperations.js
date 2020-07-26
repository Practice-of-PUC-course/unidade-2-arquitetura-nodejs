const fourOperations = {
    zero: 0,
    noNumber: 'NaN',
    forceToNumber: function(n){
        if ((+n).toString()===this.noNumber){throw "Not a Number"}
        else return +n;
    },
    "+": function(n1, n2){
        return this.forceToNumber(n1) + this.forceToNumber(n2);
    },
    "-": function(n1, n2){
        return this.forceToNumber(n1) - this.forceToNumber(n2);
    },
    "/": function(n1, n2){
        if (n2===this.zero){throw "Division by zero"}
        return this.forceToNumber(n1) / this.forceToNumber(n2);
    },
    "*": function(n1, n2){
        return this.forceToNumber(n1) * this.forceToNumber(n2);
    }
};

module.exports = fourOperations;