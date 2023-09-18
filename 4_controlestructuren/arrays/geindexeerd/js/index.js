let cursisten=['Tom', 'Tim', 'Bart', 'Els'];
//let cursisten= new array('Tom', 'Tim', 'Bart', 'Els');
let cursusJaar=['2017', '2018','2019','2020','2021','2022','2023'];

document.write(cursisten);
document.write(cursisten[0]);
document.write(cursisten[3]);
document.write(cursisten[4]);
//change an element in an array
cursisten[0]='Pieter';
document.write(cursisten);
//length of an array
document.write(cursisten.length);
//add an element
cursisten.push('Marieke');
document.write(cursisten);
document.write(cursisten[4]);
//add an element in the beginning
cursisten.unshift('Thomas');
document.write(cursisten);
//cursisten verwijderen (laatste)
cursisten.pop();
document.write(cursisten);
//cursisten verwijderen (eerste)
cursisten.shift();
document.write(cursisten);

//index of plaatsbepaling van items in een array (numerieke of geindexeerde array)
document.write(cursisten.indexOf('Bart'));
