var fs = require('fs')
fs.readFile('./abc.txt','utf-8',(err,data)=>{
    console.log(data);
})