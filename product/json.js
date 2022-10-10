//fetch grabs data across networks


fetch("music-data.json")
  .then((response) => response.json())
  .then((json) => {

    // console.log(json.Employees[0].jobTitle);

    // let list = json.Employees[0].jobTitle;

    // document.querySelector('ol').innerHTML = list;
    let products = "";
    json.Products.forEach((Products) => {
        products += `<div class="image"><img src="${Products.images}"></div>
        <div class="name">${Products.productName}</div>
        <div class="specs">${Products.specs}</div>
        <div class="price">${Products.price}</div>`;
});
document.querySelector("#productContainer").innerHTML = products;
})