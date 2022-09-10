"use strict"
window.onload = function(){
    document.getElementById("button").addEventListener("click", function (){
       const inputName = document.getElementById("name").value ;
       document.getElementById("result").value = inputName;
       document.getElementById("name").value = "";
    })
}