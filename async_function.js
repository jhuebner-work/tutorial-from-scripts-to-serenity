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
var startTime;

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

var sequentialStart =  function() {
    logStart('==SEQUENTIAL ==');
    const startDate = new Date();
    const slow = await resolveAfter2Seconds(); // If the value of the expression following the await operator is not a Promise, it's converted to a resolved Promise.
    const fast = await resolveAfter1Second();
    console.log(slow);
    console.log(fast);
    logEnd('==SEQUENTIAL ==');

};

var sequentialAsyncStart = async function() {
    logStart('==SEQUENTIAL ==');
    const startDate = new Date();
    const slow = await resolveAfter2Seconds(); // If the value of the expression following the await operator is not a Promise, it's converted to a resolved Promise.
    const fast = await resolveAfter1Second();
    console.log(slow);
    console.log(fast);
    logEnd('==SEQUENTIAL ==');

};

var concurrentStart = async function() {
    const startDate = new Date();

    logStart('==CONCURRENT with await=');
    const slow = resolveAfter2Seconds(); // starts timer immediately
    const fast = resolveAfter1Second();

    console.log(await slow);
    console.log(await fast); // waits for slow to finish, even though fast is already done!

    logEnd("CONCURRENT with await")
}

var stillSerial = function() {
    logStart('==CONCURRENT with Promise.all==');
    const startDate = new Date();

    Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then(([slow, fast]) => {
        console.log(slow);
        console.log(fast);
    });

    logEnd('==CONCURRENT with Promise.all==');

}

var parallel = function() {
    logStart('==PARALLEL with Promise.then==');
    const startDate = new Date();

    resolveAfter2Seconds().then((message)=>console.log(message)); // in this case could be simply written as console.log(resolveAfter2Seconds());
    resolveAfter1Second().then((message)=>console.log(message));

    logEnd("==PARALLEL with Promise.then==")
}

var map_reduce = function() {
    var activities = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        activities[_i] = arguments[_i];
    }
    return activities.map(this.tracker.track).reduce(function (previous, current) {
        return previous.then(function () { return current.performAs(_this); });
    }, Promise.resolve(null));
}

var logEnd = function(message) {
    const endTime = new Date();

    var timeDiff = endTime - startTime; //in ms
    // strip the ms
    timeDiff /= 1000;

    // get seconds
    var seconds = Math.round(timeDiff);
    console.log("\nEND "+message+"\n Seconds elapsed: " + timeDiff +"\n======================================\n\n");
}

var logStart = function(message) {
    startTime = new Date();


    console.log("\n======================================\nSTART "+ message +"\n"+ startTime);
}




var logTime = function(message) {
    time = new Date();


    console.log("\n======================================\nTime: "+ message +"\n"+ time);
}
logTime('before sequentialStart');
sequentialStart(); // takes 2+1 seconds in total
// wait above to finish
logTime('before concurrentStart');
setTimeout(concurrentStart, 4000); // takes 2 seconds in total
// wait again
logTime('before stillSerial');
setTimeout(stillSerial, 7000); // same as before
// wait again
logTime('before parallel');
setTimeout(parallel, 10000); // trully parallel

logTime('end');
