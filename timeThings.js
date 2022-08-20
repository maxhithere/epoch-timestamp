~~((new Date()).getTime() / 1000); //get epoch timestamp rounded


 function secSinceEpoch(sec){ 
        return ~~( sec / 1000 ); 
    }
    let d = new Date(2022, 8, 20, 30, 00, 00, 00); //customizable - syntax: year, month, day, hours, minutes, seconds, milliseconds
    let since = secSinceEpoch(d);
    console.log("Date: ", d, "Seconds till epoch: ", since) //seconds since epoch 
    
    
    
 
