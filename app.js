function inputNum(num1){
    document.getElementById("textbox1").value+=num1;   
}
function clearBox(){
    document.getElementById("textbox1").value=""
}
function giveResult(){
    document.getElementById("textbox1").value=eval(document.getElementById("textbox1").value)
}

function delBtn(){
    var del=document.getElementById("textbox1").value
    // var del1=del[del.length-1]
    del = del.slice(0,-1)
    // del=del.replace(del1,"")
    document.getElementById("textbox1").value=del
    
}

