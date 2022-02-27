const os = require('os');

//info about the user
const user = os.userInfo();
console.log(user);

//info about the current uptime
console.log(`System uptime is ${os.uptime()} seconds`);

const infos= {
    name:os.type(),
    version:os.version(),
    totalMemory:os.totalmem(),
    freeMemory:os.freemem()
}
console.log(infos);