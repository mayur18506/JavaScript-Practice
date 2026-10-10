var a = [10, 23, 18, 20];

document.write(a + "<br><br>");

var b = a.findIndex(checkadult);  //Find(), Findindex(). 
document.write(b + "<br><br>");

function checkadult(age) {
    return age >= 18;
}

