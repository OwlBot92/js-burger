
var btn = document.getElementById("btn-coupon");
var btnOrder = document.getElementById("btn-order");
var totalPrice = document.getElementById("total-price");
var arrayCoupon = ["abc11", "efg12", "mnl13"];
var percentualeSconto = 0.3;
var somma = 1;
var userBurger = document.getElementById("user-burger");

var ingredients = document.getElementsByClassName("check-value");


for (let i = 0; i < ingredients.length; i++) {
    const element = ingredients[i];
    element.addEventListener("change",
        function () {
            var value = parseFloat(element.value);
            if (element.checked) {
                somma += value;
                totalPrice.innerHTML = "$" + somma.toFixed(2);
            }
            else {
                somma -= value;
                if (somma<=0) {
                    somma = 1;
                }
                totalPrice.innerHTML = "$" + somma.toFixed(2);
            }
        }
    );
}


btn.addEventListener("click", 
    function(){
        var coupon = document.getElementById("coupon-discount");

        //check sul campo del coupon
        if (arrayCoupon.includes(coupon.value)) {
            var sconto = somma * percentualeSconto;
            console.log(sconto);
            somma -= sconto;
    
            var index = arrayCoupon.indexOf(coupon.value);
            arrayCoupon.splice(index,1);
        }
        else if (coupon.value.length > 1 && (!(arrayCoupon.includes(coupon.value)))) {
            alert("Insert valid coupon or coupon already claimed!")
        }
        else{
            somma = 1;
            totalPrice.innerHTML = "$1";
        }

        totalPrice.innerHTML = "$" + somma.toFixed(2)
    
    }
);


btnOrder.addEventListener("click",
    function(){
        if (userBurger.value.length > 1){
            window.location = "confirmation-page/confirmation.html";
        }
        else{
            alert("Non hai dato un nome al tuo Hamburger!")
        }
    }
);




















/*
btn.addEventListener("click",
    function () {
        //crea un oggetto iterabile che contiene gli elementi con classe "check-value"
        var ingredients = document.getElementsByClassName("check-value");

        var somma = 1;
        var totalPrice = document.getElementById("total-price");
        for (let i = 0; i < ingredients.length; i++) {
            var element = ingredients[i];
            var val = (parseFloat(element.value));
            if (element.checked) {
                somma += val;
            }
        }

        //check sul campo del coupon
        var coupon = document.getElementById("coupon-discount");
        if (arrayCoupon.includes(coupon.value)) {
            var sconto = somma * percentualeSconto;
            console.log(sconto);
            somma -= sconto;
        }
        else if (coupon.value.length > 1 && (!(arrayCoupon.includes(coupon.value)))) {
            alert("Insert valid coupon")
        }
        totalPrice.innerHTML = "$" + somma.toFixed(2)
    }
);*/