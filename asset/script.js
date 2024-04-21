

const container=document.getElementById('Caluculator_container');
const result2=document.getElementById('result');

container.addEventListener( 'click', (e) => {
  if (e.target.nodeName='BUTTON'){

    switch(e.target.textContent){
        case 'C':
            clear();
            break;

        case 'Del':
            deleteValue();
            break;
            
        case '=':
            evaluate();
            break;

        default:
            addToResult(e.target.textContent)  ;
    }
  }

});
function clear(){
    result2.textContent='';
}

function addToResult(value){
 result2.textContent=result2.textContent+value ;  
}

function  deleteValue(){
let CurrentContent=result2.textContent;
result2.textContent=CurrentContent.substring(0,CurrentContent.length-1)

}
function evaluate(){
 try{
    let ca=math.evaluate(result2.textContent);
    result2.textContent=ca;

 }   
 
 catch(error){
    result2.textContent='invalid operation';
    console.error(error);
 }
}
