let array1= [0,11,100,900,40,46,7,56,2,17,834];
let array2= [710,112,10,9,4,464,7,56,3,21,245];
let array3= array1.concat(array2);
//console.log(array3);
let som=0
for (let i=0;i<array3.length/2;i++){
    som += array3[i];
    document.write(array1[i], " + " ,array2[i], " = ", som, "<br>");
}

