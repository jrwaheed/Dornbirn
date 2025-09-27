"use strict";

const prompts = require('prompts');

var myGlobal = "Neptune";

async function main() {

    let theObject = {
        "firstName": "Bob",
        "lastName": "Jones",
        "age": 50,
        "isFemale": false
    }

    var myArray = [];
    var i = 5

    // while (i < 5) {
    //     myArray.push(i);
    //     i++;
    // }

    do {
        myArray.push(i);
        i++;
    } while (i < 5);

    // for (var x = 0; x < 10; x++) {
    //     myArray.push(x);
    // }

    myArray.forEach(element => {
        console.log(element);
    });

    console.log(convertToInt("10101"));

    convertToInt("10101") > 3 ? console.log("really awesome") : console.log("not awesome");

}

main();

function hasProperty(objt, prop) {
    return objt.hasOwnProperty(prop);
}

function parseTheObject(theObject) {
    for (let x in theObject) {
        console.log("an Attribute: " + " : " + theObject[x]);
    }
}


async function runThePrompt() {
    const results = await prompts({
        type: 'text',
        name: 'value',
        message: 'Please enter a value',
    })



    console.log(reverse(results.value));
}


function reverse(value) {
    const valueArr = value.split('');
    return valueArr.reverse().join('');
}

function dummyStuff() {
    let tempVar = 11;

    console.log(tempVar++);
    console.log("he is a \"real dud\"");
    console.log('he is a "real real dud\"');
}

function convertToInt(stringy) {
    return parseInt(stringy, 2);
}