//write a program  which con given gre to student according to their score
//90-100,A
//70-80 ,b
//50-60, c
let score=55;
let grease;
if(score>=90&&score<=100)
{
    grease="A";
    
}
else if(score>=70&&score<=80){
    grease="b";
}
else if(score>=50&&score<60){
    grease="c";
}
else{

grease="f";
}

console.log(grease);