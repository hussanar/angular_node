import { move, reset, myFunction } from "./func.js";

const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const dob = document.getElementById("dob");
const gender = document.getElementById("gender");
const city = document.getElementById("city");
const date = document.getElementById("date");
const time = document.getElementById("time");
const lab = document.getElementById("lab");
const report = document.getElementById("report");
const result = document.getElementById("result");
const aadhar = document.getElementById("aadhar");
export var store = [];

export var table = document.getElementById("table");
export var tr = table.getElementsByTagName("tr");

export var input = document.getElementById("find").value;

export var table1 = document.getElementById("table1");
export var sear = table1.getElementsByTagName("tr");
export var msg = document.getElementById("msg");


var add = document.getElementById("add");
add.addEventListener('click', function(e) {
    e.preventDefault();
    let store_obj = {
        firstname: fname.value,
        lastname: lname.value,
        "date of birth": dob.value,
        gender: gender.value,
        city: city.value,
        date: date.value,
        time: time.value,
        lab: lab.value,
        report: report.value,
        result: result.value,
        aadhar: aadhar.value
    };
    store.push(store_obj);
    console.log(store_obj);
    move(store_obj);
    console.log(fname.value);
});


var typed = document.getElementById("find");
typed.addEventListener("keyup", reset);

var input = document.getElementById("ip");
input.addEventListener("click", () => {
    var search = document.getElementById("find").value;
    myFunction(search);
    console.log(search);
});