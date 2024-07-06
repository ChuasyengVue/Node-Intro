const fs = require('fs');
const process = require('process');


// Step 1:
function cat(path){
    fs.readFile(path, 'utf8', function (err, data){
        if(err){
            console.error(`ERROR reading: ${path}: ${err}`);
            process.exit(1);
        }
        else{
            console.log(data)
        }
        
    });
}
cat(process.argv[2]);