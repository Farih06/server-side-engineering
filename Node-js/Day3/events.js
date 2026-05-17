/*const EventEmitter = require("events")

const emitter = new EventEmitter()

emitter.on("GREET",(args)=>{
    console.log(`hello world ${args.username} and the id is ${args.id}`)
})

emitter.emit("GREET",{
    username:"farih",
    id:"Asdasa2123aasd"
})*/

const EventEmitter = require("events")
const fs = require("fs")


const userEmitter = new EventEmitter()
const eventsCounts ={
    login:0,
    logout:0,
    purchase:0,
    profileupdate:0   
}

const logfile="eventlog.json"

if(fs.existsSync(logfile)){
    const data = fs.readFileSync(logfile,"utf-8")
    Object.assign(eventsCounts,JSON.parse(data))

}

function saveCounts(){
    fs.writeFileSync(logfile,JSON.stringify(eventsCounts,null,2))
}

//Events Creating
userEmitter.on("LOGIN",(username)=>{
    eventsCounts.login++;
    console.log(`${username}Logged In Successfully✅`)
})
userEmitter.on("LOGOUT",(username)=>{
    eventsCounts.logout++;
    console.log(`${username}Logged out In Successfully✅`)
})
userEmitter.on("PURCHASE",(username,item)=>{
    eventsCounts.purchase++;
    console.log(`${username} purchased ${item}`)
})
 
userEmitter.on("PROFILE_UPDATE",(username,field)=>{
    eventsCounts.profileupdate++;
    console.log(`${username} updated their profiled field ${field}`)
})

userEmitter.on("SUMMARY",()=>{
    console.log("\n Event Summary:")
    console.log(`Logins :${eventsCounts.login}`)
    console.log(`Logout :${eventsCounts.logout}`)
    console.log(`Purchases :${eventsCounts.purchase}`)
    console.log(`profile update :${eventsCounts.profileupdate}`)
})
 

//emit Events with different arguments

userEmitter.emit("LOGIN","Farih")
userEmitter.emit("LOGOUT","Farih")
userEmitter.emit("PURCHASE","Farih","IPHONE 17")
userEmitter.emit("PROFILE_UPDATE","Farih","EMAIL")

userEmitter.emit("SUMMARY")
saveCounts()
  
  