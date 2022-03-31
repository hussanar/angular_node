function checkEmptyInput() {
    var isEmpty = false,
        fname = document.getElementById("fname").value,
        lname = document.getElementById("lname").value,
        age = document.getElementById("age").value,
        addarNo = document.getElementById("addarNo").value,
        city = document.getElementById("city").value,
        date = document.getElementById("city").value,
        result = document.getElementById("result").value,
        tot = document.getElementById("tot").value;




    if (fname === "") {
        alert("First Name Connot Be Empty");
        isEmpty = true;
    } else if (lname === "") {
        alert("Last Name Connot Be Empty");
        isEmpty = true;
    } else if (age === "") {
        alert("Age Connot Be Empty");
        isEmpty = true;
    } else if (addarNo === "") {
        alert("addar number cannot be filled");
        isEmpty = true;
    } else if (city === "") {
        alert("city is not defined");
        isEmpty = true;
    } else if (date === "") {
        alert("date of birth is not defined");
        isEmpty = true;
    } else if (result === "") {
        alert("result is not checked");
        isEmpty = true;
    } else if (tot === "") {
        alart("time is not entered");
        isEmpty = true;
    }
    return isEmpty;
}