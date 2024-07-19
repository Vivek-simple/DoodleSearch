let input=document.querySelector(".input");
let div=document.querySelector(".suggestion");
let searchBox=document.querySelector(".search-box");
let closeBtn=document.querySelector(".btn");
input.addEventListener("click",()=>{
    input.classList.add("input-style");
    closeBtn.style.display="block";
    div.style.display='block';
    searchBox.classList.add("search-box-style");
})

closeBtn.addEventListener("click",()=>{
    div.style.display='none';
    searchBox.classList.remove("search-box-style");
    closeBtn.style.display="none";
    input.classList.remove("input-style");
})