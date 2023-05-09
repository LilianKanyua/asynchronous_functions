//Write an asynchronous function that accepts a message string and a delay time in milliseconds.
// The function should log the message to the console after the specified delay time.
// let message = true;

// let promise = new Promise(function(resolve,reject){
//     if (message){
//         setTimeout (()=>resolve("Welcome dear customer"),3000);
//     }
//     else{
//         setTimeout (resolve("No message"),3000);
//     }
// });

// const displayMessage = async () =>{
//     let display = await promise;
//     console.log({display});
// }
// displayMessage()
//function getMessage()

const displayMessage   = async function message(message,delayTime){
    await new Promise(resolve =>setTimeout(resolve,3000))

    console.log(message)
}
displayMessage("Welcome dear customer");



//You have an array of user IDs and a function getUserData(id) that returns a Promise with user data when given a user ID. 
//Write an asynchronous function that fetches and logs the data for each user ID one by one, in sequence.

let userIds=[101,102,103,104,105]

  async function getUserData(){
      for(id in userIds){
          let userData = await userData(id)
          console.log(userData)
      }
  }
  getUserData()

// You have an asynchronous function performTask() that returns a Promise. 
// The Promise resolves if the task is successful and rejects if there's an error. 
// Write a function that calls performTask() and logs a custom success message if the task is successful, 
// and a custom error message if there's an error.

let success = true

 async  function performTask(){
let promise = new Promise(function(resolve,reject)
{
    if (success){
        resolve ("Operation successful!")
    }
    else{
        reject (new Error("Task failed"));
    }
}).then(()=>(console.log("Your task has been successful")))
  .catch(()=>(console.log("Operation was not successfull.")))
  .finally(()=>(console.log("Proceed")));
console.log((promise));
}
performTask()


//

 