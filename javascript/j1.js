// let btn=document.querySelector("button ");
// console.dir(btn);  
// btn.onclick=function(){
//     console.log("BUTTON WAS CLICKED");    
// }
// btn.onmouseenter=function(){
//     console.log("BUTTON WAS CLICKED");    
// }
// btn.addEventListener("click",function(){
//     console.log("BUTTON CLICKED");    
// });
// btn.addEventListener("dblclick",function(){
//     console.log("double click");    
// });
let h1=document.querySelector("h1");
function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color=color;
            console.log(`color change to ${color}`);
            resolve("chnage color");
        },delay) 
    });
}
async function demo(){
    await changeColor("red",1000);
    await changeColor("blue",1000);
    await changeColor("green",1000);
    await changeColor("yellow",1000);
    await changeColor("violet",1000);
    await changeColor("pruple",1000);
    await changeColor("pink",1000);
    await changeColor("orange",1000);
}
demo();

