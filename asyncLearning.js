/*   ASYNC LEARNING  */ 

// Reference: https://caolan.github.io/async/v3/docs.html#parallel
const async = require('async')
// async.map

// map(coll, iteratee, callbackopt) 
// -- coll - input Array
// -- iteratee - function (item, callback) // item of array
// -- callbackopt - function(err, results)


// example -- 
// coll- stack
// iteratee - function (item, callback) 
// it executed all the elements in stack array parallely, that means checked the conditions for every element of the stack array, if error occurs in any of the elements it results in an array but still all the elements will get checked
// results in an array
// Conclusion: every element of the array will get executed no matter if error occurs in any element.

// const stack = [0, 1, 0, 1];
// const testMap = () => {
//     return new Promise((resolve, reject) => {
//         return async.map(stack, function (item, cb) {
//             if (item > 0) {
//                 console.log('stack item', item);
//                 return cb('ERROR', null);
//             }
//             else {
//                 console.log('stack item else', item);
//                 return cb(null, item);
//             }
//         }, (err, results) => {
//             if (err) {
//                 console.error('error', err);
//                 return reject(err);
//             }
//             console.log('stack result', results);
//             return resolve(results);
//         })
//     })
// }

// testMap()
// .then((res)=>{
//     console.log('test map then', res)
// })
// .catch((err)=>{
//     console.error('test map catch', err)
// })

// map

// const stack = [1,2,3,4,5];
// const even = [];
// const odd = [];
// stack.map((item)=>{
//     if(item % 2 === 0){
//         even.push(item);
//     }
//     else{
//         odd.push(item);
//     }
// })

// console.log('even', even, 'odd', odd);

// async.mapSeries

// example -- 
// coll- stack
// iteratee - function (item, callback) 
// it executed all the elements in stack array in series, that means checked the conditions for element of the stack array one by one, if error occurs in any of the elements it callback the error and stop execution there only. 
// results in an array
// Conclusion: it checks the condition one by one, and throws error immediately if the error occurs .

// const stack = [0, 1, 2, 1];
// const testMap = () => {
//     return new Promise((resolve, reject) => {
//         return async.mapSeries(stack, function (item, cb) {
//             if (item > 5) { // [(item > 1)]
//                 console.log('stack item', item);
//                 return cb('ERROR', null);
//             }
//             else {
//                 console.log('stack item else', item);
//                 return cb(null, item);
//             }
//         }, (err, results) => {
//             if (err) {
//                 console.error('error', err);
//                 return reject(err);
//             }
//             console.log('stack result', results);
//             return resolve(results);
//         })
//     })
// }

// testMap()
//     .then((res) => {
//         console.log('test map then', res)
//     })
//     .catch((err) => {
//         console.error('test map catch', err)
//     })

/*****************async.each*******************/
// each(coll, iteratee, callbackopt) 
// -- coll - input Array
// -- iteratee - function (item, callback) // item of array
// -- callbackopt - function(err) *********


// example -- 
// coll- stack
// iteratee - function (item, callback) 
// it executed all the elements in stack array parallely, that means checked the conditions for every element of the stack array, if error occurs in any of the elements it results in an array but still all the elements will get checked
// throws and returns error if any any error occurs, but in positive case also, you cannot return result like cb(null, 'result'), as cb only takes error first element
// Conclusion: every element of the array will get executed no matter if error occurs in any element. and you cannot return result and process it.
// const stack = [0, 1, 2, 1];
// const testMap = () => {
//     return new Promise((resolve, reject) => {
//         return async.each(stack, function (item, cb) {
//             if (item > 5) { // [(item > 1)]
//                 console.log('stack item', item);
//                 return cb('ERROR', null);
//             }
//             else {
//                 console.log('stack item else', item);
//                 return cb(null, item);
//             }
//         }, (err) => {
//             if (err) {
//                 console.error('error', err);
//                 return reject(err);
//             }
//             console.log('stack result');
//             return resolve();
//         })
//     })
// }

// testMap()
//     .then((res) => {
//         console.log('test map then', res)
//     })
//     .catch((err) => {
//         console.error('test map catch', err)
//     })

// /*****************async.every*******************/
// // every(coll, iteratee, callbackopt) 
// // -- coll - input Array
// // -- iteratee - function (item, callback) // item of array
// // -- callbackopt - function(err, results)


// // example -- 
// // coll- stack
// // iteratee - function (item, callback) 
// // it executed all the elements in stack array parallely, that means checked the conditions for every element of the stack array, if error occurs in any of the elements or if any of the check returns false, it calls main callback results with false immediately but still process all the elements.
// // Conclusion: every element of the array will get executed no matter if error occurs in any element.
// const stack = [2, 3,  0, 1, 5];
// const testMap = () => {
//     return new Promise((resolve, reject) => {
//         return async.every(stack, function (item, cb) {
//             if (item > 0) { // [(item > 1)]
//                 console.log('stack item', item);
//                 return cb(null, true);
//             }
//             // if (item > 1) { // [(item > 1)]
//             //     console.log('stack item', item);
//             //     return cb('ERROR');
//             // }
//             else {
//                 console.log('stack item else', item);
//                 return cb(null, false);
//             }
//         }, (err, results) => {
//             if (err) {
//                 console.error('error', err);
//                 return reject(err);
//             }
//             console.log('stack result', results);
//             return resolve(results);
//         })
//     })
// }

// testMap()
//     .then((res) => {
//         console.log('test map then', res)
//     })
//     .catch((err) => {
//         console.error('test map catch', err)
//     })


/*****************async.filter*******************/
// filter(coll, iteratee, callbackopt) 
// -- coll - input Array
// -- iteratee - function (item, callback) // item of array
// -- callbackopt - function(err, results)


// example -- 
// coll- stack
// iteratee - function (item, callback) 
// it executed all the elements in stack array parallely, that means checked the conditions for every element of the stack array, if error occurs in any of the elements or if any of the check returns false, it calls main callback results with false immediately but still process all the elements.
// Conclusion: every element of the array will get executed no matter if error occurs in any element.
// const stack = [2, 3, 0, 1, 5];
// const testMap = () => {
//     return new Promise((resolve, reject) => {
//         return async.filter(stack, function (item, cb) {
//             // if (item > 0) { // [(item > 1)]
//             //     console.log('stack item', item);
//             //     return cb(null, true);
//             // }
//             if (item > 1) { // [(item > 1)]
//                 console.log('stack item', item);
//                 return cb('ERROR');
//             }
//             else {
//                 console.log('stack item else', item);
//                 return cb(null, false);
//             }
//         }, (err, results) => {
//             if (err) {
//                 console.error('error', err);
//                 return reject(err);
//             }
//             console.log('stack result', results);
//             return resolve(results);
//         })
//     })
// }

// testMap()
//     .then((res) => {
//         console.log('test map then', res)
//     })
//     .catch((err) => {
//         console.error('test map catch', err)
//     })


/******************Async.series**********************/

// series(tasks, callbackopt)
// tasks: calling functions in series
// callbackopt: function(err, result)
// If any functions in the series pass an error to its callback, no more functions are run, and callback is immediately called with the value of the error.

// async.series([
//     function(callback) {
//         // do some stuff ...
//         console.log('func 1');
//         callback(null, 'one');
//     },
//     function(callback) {
//         // do some more stuff ...
//         console.log('func 2');
//         callback('ERROR', null);
//     },
//     function(callback) {
//         // do some more stuff ...
//         console.log('func 3');
//         callback(null, 'three');
//     }
// ],
// // optional callback
// function(err, results) {
//     if(err){
//         console.error('err', err);
//         return;
//     }
//     console.log('results', results);
//     // results is now equal to ['one', 'two']
// });

// async.series({
//     one: function(callback) {
//         setTimeout(function() {
//             callback(null, 1);
//         }, 200);
//     },
//     two: function(callback){
//         setTimeout(function() {
//             callback(null, 2);
//         }, 100);
//     }
// }, function(err, results) {
//     // results is now equal to: {one: 1, two: 2}
// });


/******************Async.parallel********************/
const testA = (item) => {
    return new Promise((resolve, reject) => {
        console.log('testA item', item);
        if (item > 2) {
            return reject(new Error('testA fails'));
        }
        return resolve(true);
    })
}

const testParallel = () => {
    return new Promise((resolve, reject) => {
        async.parallel([
            function (cb) {
                console.log('going to execute testA(2)');
                testA(2)
                    .then((res) => {
                        return cb(null, res);
                    })
                    .catch((err) => {
                        return cb(err);
                    })
            },
            function (cb) {
                console.log('going to execute testA(4)');
                testA(4)
                    .then((res) => {
                        return cb(null, res);
                    })
                    .catch((err) => {
                        return cb(err);
                    })
            },
            function (cb) {
                console.log('going to execute testA(1)');
                testA(1)
                    .then((res) => {
                        return cb(null, res);
                    })
                    .catch((err) => {
                        return cb(err);
                    })
            },
        ],
            // optional callback
            function (err, results) {
                if (err) {
                    console.error('error ', err);
                    return reject(err);
                }
                console.log('results', results);
                return resolve(results);
                // the results array will equal ['one','two'] even though
                // the second function had a shorter timeout.
            });
    })
}

testParallel()
    .then((res) => {
        console.log('testParallel then', res)
    })
    .catch((err) => {
        console.error('testParallel catch', err)
    })

// an example using an object instead of an array
// async.parallel({
//     one: function (callback) {
//         setTimeout(function () {
//             callback('ERROR', null); // [ callback(null, 1);]
//         }, 200);
//         console.log('i m here 1');
//     },
//     two: function (callback) {
//         setTimeout(function () {
//             callback(null, 2);
//         }, 100);
//         console.log('i m here 2');
//     }
// }, function (err, results) {
//     if (err) {
//         console.error('error ', err);
//         return;
//     }
//     console.log('results', results);
//     // results is now equals to: {one: 1, two: 2}
// });
