//Write an asynchronous function that accepts a message string and a delay time in milliseconds.
// The function should log the message to the console after the specified delay time.


const displayMessage   = async function message(message){
    await new Promise(resolve =>setTimeout(resolve,3000))

    console.log(message)
}
displayMessage("Welcome dear customer");



//You have an array of user IDs and a function getUserData(id) that returns a Promise with user data when given a user ID. 
//Write an asynchronous function that fetches and logs the data for each user ID one by one, in sequence.