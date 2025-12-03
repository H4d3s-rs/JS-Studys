const values = {
    begin: 0,
    end: 0,
    pass: 0

};

document.getElementById("send").addEventListener("click", () => {
    const output = document.getElementById("output");
    values.begin = Number(document.getElementById("begin").value);
    values.end = Number(document.getElementById("end").value);
    values.pass = Number(document.getElementById("pass").value);

    if(values.end < values.begin) {
        alert("The end value can't be the same or fewer then the begin value");

    }

    for(let i = values.begin; i <= values.end; i += values.pass) {
        output.innerHTML += `<span>${i}</span>`;

    }    
});