
let count = 0;

function add (){
    count++
    document.getElementById ("display").innerHTML = count;
}
console.log ()

//let CountDisplay = 0;
//document.querySelector('.count-display')
//.innerHTML = `${CountDisplay}`;
//const count = `${CountDisplay}`;
//console.log(count)
//const counterElement = CountDisplay ;
//console.log(CountDisplay)
function reset (){
    count = 0
    document.getElementById ("display").innerHTML = count;
}