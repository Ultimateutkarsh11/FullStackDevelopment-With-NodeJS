function someAsyncTask(callback){
    console.log("Beginning of task");
    setTimeout(function(){
        console.log("End of task");
        callback();
    },3000)
}

let someTaskPromise =function(){
    return new Promise(function(resolve,reject){
        someAsyncTask(resolve);
    })
}
someTaskPromise().then(()=>{
    console.log("Task completed succesfully")
})