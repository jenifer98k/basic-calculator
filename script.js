let outputscreen=document.getElementById("output-screen");

function Display(num){
    outputscreen.value += num;   
    try{
     if(outputscreen.value==='+'||outputscreen.value==='-'||outputscreen.value==='/'||outputscreen.value==='%'||outputscreen.value==='*')   
    if(outputscreen.value = eval( outputscreen.value));
   if(typeof outputscreen.value==='number'); 
}
catch(err){
   alert ("Only numbers are allowed")
} 
}
function mplus(){
   
}

function calculate(){
    outputscreen.value = eval( outputscreen.value)
}
function Clear(){
    outputscreen.value = "";
}
function del(){
    outputscreen.value=outputscreen.value.slice(0,-1);
}
