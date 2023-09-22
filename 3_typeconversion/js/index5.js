let result = 0;
let count = document.getElementById("count").value;
document.getElementById("add").onclick = function(){
    result = result + Number(document.getElementById("count").value);
    document.getElementById("myResult").innerHTML = result;
}

// let result = 0;
//
// document.getElementById("telOp").onclick = function(){
//     result = result + Number(document.getElementById("getal").value);
//     document.getElementById("resultaat").innerHTML = result;
// }