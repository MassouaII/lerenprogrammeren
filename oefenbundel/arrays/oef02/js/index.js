let array1= [0,1,2,3,4,5,6,7,8,9,10];
let array2= [0,1,2,3,4,5,6,7,8,9,10];
let array3= array1.concat(array2);
let som=0
for (let i=1;i<array3.length;i++){
    som= array1[i]+array2[i];
    document.write(array1[i], " + " ,array2[i], " = ", som, "<br>");
}

