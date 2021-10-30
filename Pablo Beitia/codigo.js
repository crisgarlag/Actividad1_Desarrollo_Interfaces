var nameArticle;
var priceArticle;
var unitOption;
var buttonAddCart;
var buttonReset;
var totalPrice;
var priceArticleFinal;
var cartArticles;
var nameCard;
var numberCard;
var cvv;
var errorPrice;
var errorName;
var errorUnits;
var pay;
var creditCardMethod;
var cashMethod;
var amountCash;
var errorTitular;
var errorCardNumber;
var errorCVV;
var buttonPrint;
var conditions;
var amountCard;
var cartArticles2;

window.addEventListener("load", init);

/**
 * FUNCIONES DE INICIO--------------------------------------
 */

function init(){
    initVariables();
    initEvents();
}

function initVariables(){
    nameArticle = document.getElementById("nameArticle");
    nameArticle.focus();
    priceArticle = document.getElementById("priceArticle");
    unitOption = document.getElementById("unitOption");
    buttonAddCart = document.getElementById("addCart");
    buttonReset = document.getElementById("buttonReset");
    buttonPrint = document.getElementById("buttonPrint");
    totalPrice = document.getElementById("totalPrice");
    cartArticles = document.getElementById("cartArticles");
    nameCard = document.getElementById("nameCard");
    numberCard = document.getElementById("numberCard");
    cvv = document.getElementById("cvv");
    errorPrice = document.getElementById("errorPrice");
    errorName = document.getElementById("errorName");
    errorUnits = document.getElementById("errorUnits");
    selectPay = document.getElementById("pay");
    creditCardMethod = document.getElementById("creditCardMethod");
    cashMethod = document.getElementById("cashMethod");
    amountCash = document.getElementById("amountCash");
    errorTitular = document.getElementById("errorTitular");
    errorCardNumber = document.getElementById("errorCardNumber");
    errorCVV = document.getElementById("errorCVV");
    conditions = document.getElementById("conditions");
    amountCard = document.getElementById("amountCard");
    
}

function initEvents(){
    buttonAddCart.addEventListener("click", detectErrorCart);
    buttonReset.addEventListener("click", resetVariables);
    buttonPrint.addEventListener("click", detectErrorPay);
    buttonPrint.addEventListener("click", printTicket);
    selectPay.addEventListener("change", wayToPay);
    conditions.addEventListener("change", enablebutton);
}


/**
 * FUNCIONES DEL PROGRAMA---------------------------------------------
 */
function añadirCarrito(){
    priceArticleFinal = Number(priceArticle.value); 
    priceArticleFinal = unitOption.value * priceArticleFinal;
    totalPrice.value = Number(totalPrice.value) + priceArticleFinal;
    amountCash.value = totalPrice.value + "€";
    amountCard.value = totalPrice.value + "€";

    if(cartArticles.value != ""){
        cartArticles.value = cartArticles.value + "\n" + "-> " + nameArticle.value + "  -  " +  unitOption.value + "/uds  -  " + priceArticleFinal + "€";
    }else{
        cartArticles.value = "-> " + nameArticle.value + "  -  " +  unitOption.value + "/uds  -  " + priceArticleFinal + "€";
    }
    resetArticleVariables();
}

function wayToPay(){
    if(totalPrice.value != "0"){
        if(selectPay.value == "tarjeta"){
            cashMethod.style.display = "none";
            window.alert("Has elegido " + selectPay.value);
            creditCardMethod.style.display = "block";
        }

        if(selectPay.value == "efectivo"){
            creditCardMethod.style.display = "none";
            window.alert("Has elegido " + selectPay.value);
            cashMethod.style.display = "block";
            
        }
        if(selectPay.value == "selecciona"){
            window.alert("Selecciona un método válido");
            creditCardMethod.style.display = "none";
            cashMethod.style.display = "none";
        }
    }else{
        window.alert("Por favor, añada productos al carrito.")
        selectPay.value = "selecciona";
    }
}

function printTicket(){
    if(selectPay.value == "selecciona"){
        window.alert("Elige un método de pago");
    }else{
        window.alert("Los artículos de mi carrito son: \n" + cartArticles.value + "\ny el precio total es: " + amountCash.value + "\nForma de pago: " + selectPay.value);
    }
}

function enablebutton(){
    if(buttonPrint.disabled == true){
        buttonPrint.disabled = false;
    }else{
        buttonPrint.disabled = true;
    }
}


/**
 * FUNCIÓN DE ERRORES----------------------------------------------------------
 */
function detectErrorCart(){
    resetErrors();
    if(nameArticle.value == ""){
        errorName.style.color = "red";
        errorName.textContent = " Pon un nombre de artículo válido.";

    }else if(priceArticle.value == "" || priceArticle.value <= "0"){
        errorPrice.textContent = " Pon un precio válido.";
        errorPrice.style.color = "red";

        }else if(unitOption.value == "" || unitOption.value <= "0"){
            errorUnits.textContent = " Pon un número de unidades válido.";
            errorUnits.style.color = "red";

    }else{
        añadirCarrito();
    }
}

function detectErrorPay(){
    resetErrors();
    if(nameCard.value == ""){
        errorTitular.style.color = "red";
        errorTitular.textContent = " Pon un titular válido.";

    }else if(numberCard.value == ""){
        errorCardNumber.textContent = " La tarjeta debe contener números.";
        errorCardNumber.style.color = "red";

        }else if(cvv.value == ""){
            errorCVV.textContent = " El CVV no es válido.";
            errorCVV.style.color = "red";
        }
    }

/**
 * FUNCIONES PARA RESETEAR -----------------------------------------
 */
function resetArticleVariables(){
    nameArticle.value = "";
    unitOption.value = "1";
    priceArticle.value = "";
}

function resetVariables(){
    nameArticle.focus();
    nameArticle.value = "";
    unitOption.value = "1";
    priceArticle.value = "";
    cartArticles.value = "";
    totalPrice.value = "0";
    selectPay.value = "selecciona";
    conditions.checked = false;
    nameCard.value = "";
    numberCard.value = "";
    cvv.value = "";
    creditCardMethod.style.display = "none";
    cashMethod.style.display = "none";
    buttonPrint.disabled = true;
}

function resetErrors(){
    errorName.textContent = "";
    errorPrice.textContent = "";
    errorUnits.textContent = "";
    errorTitular.textContent = "";
    errorCardNumber.textContent = "";
    errorCVV.textContent = "";
}


