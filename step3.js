const fs = require('fs');
const process = require('process');
const axios = require('axios');


// Step 1:
function cat(path, out){
    fs.readFile(path, 'utf8', function (err, data){
        if(err){
            console.log(`ERROR reading: ${path}: ${err}`);
            process.exit(1);
        }
        else{
            outPut(data, out);
        }
        
    });
}


// Step 2:
async function webCat(url, out){
    try {
        let web = await axios.get(url);
        outPut(web.data, out);  
    } 
    catch (error) {
        console.error(`ERROR FETCHING: ${url}: ${error}`);
        process.exit(2);
    }
}
    let path = process.argv[2];
    let out;
    if(path === '--out'){
        out = process.argv[3];
        path = process.argv[4];
    }
    else{
        path;
    }

    if(path.slice(0,4) === 'http'){
        webCat(path, out );
    }
    else{
        cat(path, out);
    }

    
// Step 3:
    function outPut(text,out){
        if(out){
            fs.writeFile(out, text, 'utf8', function(err){
                if(err){
                    console.error(`Couldn't write ${out}: ${err}`);
                    process.exit(1);
                }
            });     
        }
        else{
            console.log(text)
        }
    }
