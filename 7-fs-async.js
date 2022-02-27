const {readFile,writeFile}=require('fs')

console.log(`Start`);
readFile(`./content/firstText.txt`,'utf8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first=result;
    readFile(`./content/secondText.txt`,'utf8',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second=result;
        writeFile(`./content/result-async-text.txt`,
        `Here is the result: ${first} , ${second}`,
        (err,result)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log(`Done with task`);

        })
    })
})
console.log(`Starting the next one`);