// this is the shaallow copy///////////////////
const jack={
  
      car:"maruti",
        ceke :"choclate"


}
const oggy=jack;
oggy.ceke;
oggy.car;
console.log(oggy);
console.log(jack)
//deep copy ////////////////

const jack2={
  
      ceke :"choclate"
}
const oggy2={ }

for(element in jack2)
{
    oggy2[element]=jack2[element]
}
oggy2.channel="cn"
console.log(oggy2)
console.log(jack2)