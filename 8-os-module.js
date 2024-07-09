//os module... buit in
const os = require('os'); //importing the os module
//info about current user

const user= os.userInfo(); //uses the userInfo method from os module which returns
//an object containing information about the currently effective user.

console.log(user);///log the user info.

console.log(`The system uptime is ${os.uptime()} seconds`);
//get the system uptime and then logging it to the console.

//Create an object with various OS information
const currenOS = 
{
    name : os.type(),
    release : os.release(),
    totalmem : os.totalmem(),
    freemem: os.freemem(),
}
console.log(currenOS);
//logs the info.

//the info comes from the operating system.


//output
// {
//     uid: -1,  userID 

//     gid: -1, GroupId
//     username: 'dipsa', Windows user account name.
//     homedir: 'C:\\Users\\dipsa',  home directory on the Windows system.
//     shell: null,set to null on Windows because Windows doesn't use the concept of a default shell in the same way Unix-like systems do.
//   }

