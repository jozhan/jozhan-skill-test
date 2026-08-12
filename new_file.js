// This file contains ESLint errors for testing purposes

function badFunction() {
    // Unused variable - ESLint error
    var unusedVar = "this is not used";
    
    // Using var instead of const/let - ESLint error
    var x = 5;
    
    // Missing semicolon (if that rule is enabled)
    console.log("Hello World")
    
    // Using == instead of === - ESLint error
    if (x == 5) {
        console.log("equal");
    }
    
    // Unreachable code after return - ESLint error
    return true;
    console.log("This will never execute");
}

// Function with inconsistent return - ESLint error
function inconsistentReturn(condition) {
    if (condition) {
        return true;
    }
    // Missing return statement
}

// Unused function parameter - ESLint error
function withUnusedParam(used, unused) {
    console.log(used);
}

// Trailing whitespace and mixed spaces/tabs - ESLint error
	var mixedIndentation = "bad";  

// Deprecated eval usage - ESLint error
eval("console.log('dangerous')");

// No use strict directive - ESLint error
var globalVariable = "should be avoided";

// Multiple declarations in one statement - ESLint error
var a = 1, b = 2, c = 3;

// Empty block statement - ESLint error
if (true) {
}

// Assignment in conditional - ESLint error
var value = 0;
if (value = 5) {
    console.log("Assigned instead of compared");
}

module.exports = { badFunction, inconsistentReturn, withUnusedParam };
