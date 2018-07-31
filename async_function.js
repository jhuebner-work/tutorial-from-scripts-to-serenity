/*
 * Simple example of Promise, async and await:
 * 
 * @url https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function#Simple+example
 * See also
 * Promise
 * async function expression
 * AsyncFunction object
 * await
 *
 */

var resolveAfter2Seconds = function() {
    console.log("starting slow promise");
    return new Promise(resolve => {
        setTimeout(function() {
            resolve(20);
            console.log("slow promise is done");
        }, 2000);
    });
};

var resolveAfter1Second = function() {
    console.log("starting fast promise");
    return new Promise(resolve => {
        setTimeout(function() {
            resolve(10);
            console.log("fast promise is done");
        }, 1000);
    });
};

var sequentialStart = async function() {
    logTimestamp('==SEQUENTIAL START==');
    const startDate = new Date();
    const slow = await resolveAfter2Seconds(); // If the value of the expression following the await operator is not a Promise, it's converted to a resolved Promise.
    const fast = await resolveAfter1Second();
    console.log(slow);
    console.log(fast);
    logSecondsElapsed(startDate);
    logTimestamp('==SEQUENTIAL END');

};

var concurrentStart = async function() {
    const startDate = new Date();

    logTimestamp('==CONCURRENT  with await==START');
    const slow = resolveAfter2Seconds(); // starts timer immediately
    const fast = resolveAfter1Second();

    console.log(await slow);
    console.log(await fast); // waits for slow to finish, even though fast is already done!
    logSecondsElapsed(startDate);

    logTimestamp("CONCURRENT with await ==END")
}

var stillSerial = function() {
    logTimestamp('==CONCURRENT START with Promise.all==');
    const startDate = new Date();

    Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then(([slow, fast]) => {
        console.log(slow);
        console.log(fast);
    });
    logSecondsElapsed(startDate);

    logTimestamp('==CONCURRENT END with Promise.all==');

}

var parallel = function() {
    logTimestamp('==PARALLEL with Promise.then==');
    const startDate = new Date();

    resolveAfter2Seconds().then((message)=>console.log(message)); // in this case could be simply written as console.log(resolveAfter2Seconds());
    resolveAfter1Second().then((message)=>console.log(message));
    logSecondsElapsed(startDate);

    logTimestamp("==PARALLEL with Promise.then==END")
}

var logSecondsElapsed = function(startTime) {
    const endTime = new Date();

    var timeDiff = endTime - startTime; //in ms
    // strip the ms
    timeDiff /= 1000;

    // get seconds
    var seconds = Math.round(timeDiff);
    console.log("\n Seconds elapsed: " + timeDiff +"\n======================================\n\n");
}

var logTimestamp = function(message) {
    const currentdate = new Date();


    console.log(currentdate+":\t"+message);
}

logTimestamp('before sequentialStart');
sequentialStart(); // takes 2+1 seconds in total
// wait above to finish
logTimestamp('before concurrentStart');
setTimeout(concurrentStart, 4000); // takes 2 seconds in total
// wait again
logTimestamp('before stillSerial');
setTimeout(stillSerial, 7000); // same as before
// wait again
logTimestamp('before parallel');
setTimeout(parallel, 10000); // trully parallel

logTimestamp('end');
