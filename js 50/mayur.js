var a = {
    fname: "Mayur",
    lname: "Piprewar",
    age: 20,
    country: "India",
    favmoviesm: ['Dhoom', 'Sholey', 'Hum'],
    living: {
        'city': 'Nagpur',
    },
    salary: function () {
        return 25000;
    },
    fullname: function () {
        return this.fname + " " + this.lname
    }
}

console.log(a);
document.write(a.fname);
document.write("<br>");
document.write(a.favmoviesm);
document.write("<br>");
document.write(a.salary());
document.write("<br>");
document.write(a.fullname());
document.write("<br>");
document.write(a.living.city);



