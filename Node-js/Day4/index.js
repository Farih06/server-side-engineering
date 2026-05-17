const http = require("http")
const fs = require("fs")
const PORT = 8080

const myserver = http.createServer((request,response)=>{


    // ?----------1----------

    //1.downloading file in a bad way❌. 
    //const file = fs.readFileSync("sample.txt");

    //2.dowloading file in a good way
     const readableStream= fs.createReadStream("sample.txt")
     readableStream.pipe(res)
     //res.end()







    response.end(file);
})

myserver.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`)
})

