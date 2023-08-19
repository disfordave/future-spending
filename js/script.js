let totalAssets = 0;
let howManyProductList = 1;
let currency = "USD";

console.log(howManyProductList);

document.getElementById("total-assets").addEventListener("click", function() {
    if (document.getElementById("total-assets").value == 0) {
        document.getElementById("total-assets").value = null;
    }
});

document.getElementById("clear-button").addEventListener("click", function() {
    for (i = howManyProductList - 1; i > 0; i--) { // Start from howManyProductList - 1 and go to 1
        document.getElementsByClassName("div-input")[i].remove(); // Remove the entire div containing product name, price, and number
    }
    document.getElementById("total-assets").value = 0;
    howManyProductList = 1;

    document.getElementsByClassName("price-input")[0].value = ""; // Clear the first price input
    document.getElementsByClassName("product-name-input")[0].value = ""; // Clear the first product name input
    document.getElementById("remaining-assets").innerHTML = ``;
});


document.getElementById("add-product").addEventListener("click", function() {
        let divInput = document.createElement("div");
        let input = document.createElement("input");
        let priceInput = document.createElement("input");
        let num = document.createElement("p");
        divInput.className = "div-input";
        num.innerHTML = `${howManyProductList + 1}. `;
        num.className = "number-index"
        input.type = "text";
        input.placeholder = "Product Name";
        input.className = "product-name-input";
        priceInput.type = "text";
        priceInput.placeholder = "Price";
        priceInput.className = "price-input";
        divInput.appendChild(num);
        divInput.appendChild(input);
        divInput.appendChild(priceInput);
        document.getElementById("price-area").appendChild(divInput);
        howManyProductList += 1;
        console.log(howManyProductList);
});

document.getElementById("submit").addEventListener("click", function() {
    let totalSpendings = 0;
    let final = 0;
    totalAssets = document.getElementById("total-assets").value;
    currency = document.getElementById("currencies").value;

    for (i = 0; i < howManyProductList; i++) {
        totalSpendings = Number(document.getElementsByClassName("price-input")[i].value) + totalSpendings;
        console.log(`totalspending: ${totalSpendings}`);
    }
    final = Number(totalAssets) - Number(totalSpendings);
    document.getElementById("remaining-assets").innerHTML = `${final.toLocaleString()} ${currency}`;
});
