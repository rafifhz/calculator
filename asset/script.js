

const container=document.getElementById('Caluculator_container');
const result2=document.getElementById('result');
//const btn=document.getElementById('moon');
const btn=document.getElementsByClassName('silver2');

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


//btn.addEventListener( 'click', (e) => {
//if(!container.classList.contains("active"))
//{
    // document.getElementById("Caluculator_container").classList.add("dark-mode");

    // container.ClassList.add("dark-mode");
   // container.style.backgroundColor="#000";
//btn.innerHTML =""
//}
//else{container.style.backgroundColor="#fff";
btn.innerHTML="";
;
//}
//});

//function toggleClasses() {
 //   let container = document.getElementById('Caluculator_container');

   // if (container.classList.contains("class1")) {
    //    console.log("x")
    //    container.classList.remove("class1");
       // container.classList.add("class2");

    //} else {
     //   container.classList.remove("class2");
      //  container.classList.add("class1");
        //btn.innerHTML =document.getElementById("fas fa-sun");
    //}
//}







document.querySelector('#checkbox').addEventListener('change', () => {
   // document.body.classList.toggle('dark');
   if (container.classList.contains("class1")) {
    console.log("x")
    container.classList.remove("class1");
    container.classList.add("class2");

} else {
    container.classList.remove("class2");
    container.classList.add("class1");
  

    //btn.innerHTML =document.getElementById("fas fa-sun");
}

  });
