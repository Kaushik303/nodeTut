const {readFileSync,writeFileSync}=require('fs');

console.log('Starting');
const first=readFileSync('./content/firstText.txt','utf8');
const second=readFileSync('./content/secondText.txt','utf8');

//console.log(first,second);

//Merge file using writefilessync

writeFileSync(
    './content/result-text.txt',
`The result string is ${first} , ${second}`,
{flag:'a'}
)
console.log('Done with task');
console.log(`Starting next one`);
