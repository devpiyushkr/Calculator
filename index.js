
const input=document.querySelector("input")
 const allButton=document.querySelectorAll("button");
 const ac=document.querySelector("#ac");
 const del=document.querySelector("#del");
 const equal=document.querySelector(".equal")


console.log(input)
for(let button of allButton){
button.addEventListener("click",(e)=>{
console.log(e.target.value)
input.value+=e.target.value;
})
}
ac.addEventListener("click",()=>{

input.value="";

})

del.addEventListener("click",()=>{
input.value  = input.value.toString().slice(0,-1);

})
equal.addEventListener("click",()=>{
input.value=eval(input.value);
})