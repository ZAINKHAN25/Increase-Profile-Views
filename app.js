const name = document.querySelector(".User-Name-Input");
const quantity = document.querySelector(".Quantity-Increase-Input");
const submitBtn = document.querySelector(".Submit-Btn");

submitBtn.addEventListener("click", () => {

    for (let i = 0; i <= quantity.value; i++) {
        window.open(`https://github.com/${name.value}`);    
    };

})  