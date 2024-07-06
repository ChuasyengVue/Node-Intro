const fs = require('fs');
const process = require('process');
const axios = require('axios');


// Step 1:
function cat(path){
    fs.readFile(path, 'utf8', function (err, data){
        if(err){
            console.error(`ERROR reading: ${path}: ${err}`);
            process.exit(1);
        }
        else{
            console.log(data);
        }
        
    });
}


// Step 2:
async function webCat(url){
    try {
        let web = await axios.get(url);
        console.log(web.data);  
    } 
    catch (error) {
        console.error(`ERROR FETCHING: ${url}: ${error}`);
        process.exit(2);
    }
}
    let path = process.argv[2];

    if(path.slice(0,4) === 'http'){
        webCat(path);
    }
    else{
        cat(path);
    }
