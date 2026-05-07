const http = require ("http") 
const fs = require ("fs")

const PORT = 8080




const myServer = http.createServer((request,response)=>{
 const log =`${Date.now()}: & From ${request.url} New request recived\n;`
  fs.appendFile("log.txt",log,(err)=>{
        if(err){
            console.error("error writing to the log file")
            response.statusCode=500;
            repsonse.end("Internel server Error")
            return;
            }
        response.end("hello from server")
    })
})

myServer.listen(PORT,()=>{
    console.log(`server is connected 🐇 at ${PORT}`)

   
})