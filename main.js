let text=document.querySelector("#text");
let items=(document.querySelectorAll(".item"));
let container=document.querySelector(".container")
let bold=document.querySelector("#bold");

let light =document.querySelector("#light");

let text_mode=localStorage.getItem("shadow");
let b_mode=localStorage.getItem("bold");
let l_mode=localStorage.getItem("light")
// if(text_mode==="enable"){
//     text_shadow=true;
// }else{
//     text_shadow=false;
// }
// text.addEventListener("click",()=>{
    
//       if(text_shadow){
//         for(n of items){
//             n.className="g"
//             text_shadow=false;
//             localStorage.setItem("shadow","enable")
//         }
//     }else{
//         for(n of items){
//             n.className="item"
//             text_shadow=true;
//             localStorage.setItem("shadow","able")
//     }
//  }
// }
//)

text.addEventListener("click",se)
bold.addEventListener("click",black)

function black(){
    b_mode=localStorage.getItem("bold");
    if(b_mode==="enable"){
        boff();
    }else{
        bon();
       }
}

if(b_mode==="enable"){
      bon();
}else{
    boff();
}
function boff(){
    for(n of items){
        n.classList.remove("bold");
        localStorage.setItem("bold",null)
    }
}
function bon(){
    for(n of items){
        n.classList.add("bold")
        localStorage.setItem("bold","enable")
    }
}
if(text_mode==="enable"){
    ton();
   
}else{
    toff();
    
}
function se(){
    text_mode=localStorage.getItem("shadow");
    if(text_mode==="enable"){
        toff();
    }else{
        ton();
    }
}

function toff(){
    for(n of items){
    n.classList.remove("gold")
    text_mode=false;
    localStorage.setItem("shadow",null);
    }
}
function ton(){
    for(n of items){
       n.classList.add("gold")
        text_mode=true;
        localStorage.setItem("shadow","enable");
    }
}

//light mode
if(l_mode==="enable"){
    lon();
}else{
    loff();
}
 light.addEventListener("click",()=>{
      l_mode=localStorage.getItem("light");
      if(l_mode==="enable"){
          loff();
      }else{
           lon();
      }
 })

 function loff(){
     container.classList.remove("dark");
     localStorage.setItem("light",null);
     light.className="bx bx-moon"
 }
 function lon(){
     container.classList.add("dark");
     localStorage.setItem("light","enable");
     light.className="bx bx-sun"

 }
    
