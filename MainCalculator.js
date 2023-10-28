function displayValue(data){
    document.getElementById("result").value=document.getElementById("result").value+data;
}

// data clear for all 
//function clearData(){
//    document.getElementById("result").value='';
//}

// step by step data clear
function clearData(){
    document.getElementById("result").value=document.getElementById("result").value.slice(0,-1);
}


function resultData(){
    // setting variable getData for result
    var getData=document.getElementById("result").value; 
    //  evaluating the result data
    var finalData=eval(getData);
    // storing the data in result box
    document.getElementById("result").value=finalData;
}