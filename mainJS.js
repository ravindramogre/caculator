let outputScreen=document.getElementById("myInput");
function Display(num){
    outputScreen.value+=num;
}
function Delete(){
    outputScreen.value=outputScreen.value.slice(0,-1);
}
function Calculate(){
    try{
        outputScreen.value=eval(outputScreen.value);
    }
    catch(err){
        alert("Invalid");
    }
}
function Clear(){
    document.getElementById("myInput").value="";
}
//var x=document.getElementsByTagName("input").value;
//console.log(x);