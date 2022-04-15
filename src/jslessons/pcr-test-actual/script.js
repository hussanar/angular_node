import { move, myFunction, reset } from "./func.js";
var input1 = document.getElementById("ip");
input1.addEventListener("click", myFunction);
var typed = document.getElementById("find");
typed.addEventListener("keyup", reset);