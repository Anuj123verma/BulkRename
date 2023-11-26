const fs = require('fs');
const path = require('path');
const replaceThis = "anuj"
const replaceWith = "pawan"
const preview = false
const folder = path.join(__dirname, "data")

try{
    const data = fs.readdir(folder, (err, data)=>{
        for(let idx =0;idx<data.length;idx++){
            const item = data[idx];
            let oldFile = path.join(folder,item)
            let newFile = path.join(folder, item.replaceAll(replaceThis, replaceWith))
            if(!preview){
                fs.rename(oldFile, newFile, ()=>{
                    console.log("Rename Success", item, newFile)
                })
            }
            else{
                if(oldFile!=newFile){
                    console.log(oldFile+" will be renamed to "+newFile)
                }
            }
        }
    })
} 
catch(err){
    console.log(err);
}
