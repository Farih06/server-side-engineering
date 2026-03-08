const fs = require("fs");
//there are 2 types of code 
//sync code
//async code

// *write

fs.writeFileSync("./text.txt","hello world this is sync file");

fs.writeFile("./text2.txt","hello world this is async file",(err)=>{
    console.log(err);
}
)

// *read

const re = fs.readFileSync("text.txt","utf-8")
console.log(re)

fs.readFile("./text2.txt","utf-8" ,(error,response)=>{
    if(error){
        console.log(error)
    }
    else{
        console.log(response)
    }


})

// *update /append

fs.appendFileSync("./text.txt",new Date().toDateString())

fs.appendFile("./text2.txt",`hello guys im appending in an async manner ${new Date().toDateString()}`,(err,res)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(res)
    }
})