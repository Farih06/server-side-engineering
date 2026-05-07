const crypto = require("crypto")


let start = Date.now();
crypto.pbkdf2("password-1","salt1",100000,1024,"sha512",()=>{
    console.log(`${Date.now() -start}ms Done`)
})
crypto.pbkdf2("password-1","salt1",100000,1024,"sha512",()=>{
    console.log(`${Date.now() -start}ms Done`)
})
crypto.pbkdf2("password-1","salt1",100000,1024,"sha512",()=>{
    console.log(`${Date.now() -start}ms Done`)
})
crypto.pbkdf2("password-1","salt1",100000,1024,"sha512",()=>{
    console.log(`${Date.now() -start}ms Done`)
})
crypto.pbkdf2("password-1","salt1",100000,1024,"sha512",()=>{
    console.log(`${Date.now() -start}ms Done`)
})


//this code to understand threadpool and workers. // cpu intensive tasks.