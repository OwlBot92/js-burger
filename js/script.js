

var arrayCoupon = ["abc11", "efg12", "mnl13"];
var btn = document.getElementById("btn-calc");
var percentualeSconto = 0.3;
btn.addEventListener("click", 
    function(){
        /* crea un oggetto iterabile che contiene gli elementi con classe "check-value" */
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

        /* check sul campo del coupon */
        var coupon = document.getElementById("coupon-discount");
        if (arrayCoupon.includes(coupon.value)) {
            var sconto = somma * percentualeSconto;
            console.log(sconto);
            somma -= sconto;
        }
        else if (coupon.value.length>1 && (!(arrayCoupon.includes(coupon.value)))) {
            alert("Insert valid coupon")
        }
        totalPrice.innerHTML = "$" + somma.toFixed(2)
    }
);
