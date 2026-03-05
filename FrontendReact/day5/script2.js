console.log('hello');
setTimeout(()=>{//will however execute at the end even if the time is 0ms.
    console.log("Will log after 2 seconds")
},2000)
Promise.resolve("Promise").then(res=>console.log(res))
console.log('end')
//React - uses virtualDOM - compares with the real DOM and if there are any modificatiaons reloads only that and entire realDOM is not loaded
