const fs=require("fs")

const userInput=process.argv[2]
// .splice(2).join("")
console.log(userInput)
fs.writeFile("test.txt", userInput,(err)=>{
    if(err){ console.log(err)
}
console.log("done!")
})
// // callback function
// fs.readFile("log.text", "utfs",(err,data)=>{

// })