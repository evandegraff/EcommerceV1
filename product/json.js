//fetch grabs data across networks


fetch('/music.data.json') 
.then(response => response.json)
.then(json => {

    // console.log(json.Employees[0].jobTitle);

    // let list = json.Employees[0].jobTitle;

    // document.querySelector('ol').innerHTML = list;
let list = "";
    json.Products.forEach(Products => {
        console.log(`beginning of loop${list}`)
        list += `<li>${Products}</li>`
        console.log(`end of loop ${list}`);
});
document.querySelector('ol').innerHTML = list;
document.querySelector('purple').innerHTML = json.Products[0].name;
})