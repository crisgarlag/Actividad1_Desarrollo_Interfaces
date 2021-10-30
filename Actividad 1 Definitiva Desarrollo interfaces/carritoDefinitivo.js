// Variables con las etiquetas input de tipo text y checkbox.
var nombreArticulo;
var precioArticulo;
var unidades;
var articulosCarrito;
var precioTotal;
var condiciones;
var titularTarjeta;
var numeroTarjeta;
var cvvTarjeta;
var importePagoEfectivo;

// Variables con las etiquetas input de tipo button y submit.
var botonAñadir;
var botonRestablecer;
var botonImprimir;
var iconoImprimir;
var iconoRestablecer;

// Array con todos los elementos ocultos.
var oculto;

// Variables utilizadas para buscar la forma de pago seleccionada por el usuario.
var formaPago;
var indicePagoSeleccionado;
var opcionPagoSeleccionado;

//Variables utilizadas para obtener el precio total de los articulos elegidos.
var pr;
var un;
var acum = 0;

/**
 * Funcion para inicializar las variables 
 */
function inicializar() {

    nombreArticulo = document.getElementById("nombrearticulo");
    precioArticulo = document.getElementById("precioarticulo");
    unidades = document.getElementById("unidades");
    botonAñadir = document.getElementById("botonañadir");
    articulosCarrito = document.getElementById("totalarticulos");
    precioTotal = document.getElementById("preciototal");
    oculto = document.getElementsByClassName("oculto");
    formaPago = document.getElementById("formapago");
    condiciones = document.getElementById("condiciones");
    botonImprimir = document.getElementById("imprimir");
    iconoImprimir = document.getElementById("iconoimprimir");
    iconoRestablecer = document.getElementById("iconorestablecer");
    importePagoEfectivo = document.getElementById("importepagoefectivo");
    importePagoEfectivo = document.getElementById("importepagoefectivo");
    titularTarjeta= document.getElementById("titulartarjeta");
    numeroTarjeta= document.getElementById("numerotarjeta");
    cvvTarjeta= document.getElementById("cvv");
    botonRestablecer = document.getElementById("restablecer");
    nombreArticulo.focus();

}
/**
 * Funcion que evalua si las dos primeras cajas de texto estan vacias y si la caja del precio contiene valor numerico
 * Si cumple todas las condiciones se añaden los valores correspondiente s a la caja de articulos en el carrito y
 * precio total en el carrito
 */
function añadirTotalesArticulosPrecio() {
    if (precioArticulo.value != "" && nombreArticulo.value != "" && !isNaN(precioArticulo.value)) {
        if (articulosCarrito.value == "") {
            articulosCarrito.value += nombreArticulo.value;
        } else {
            articulosCarrito.value += ", " + nombreArticulo.value;
        }
        pr = parseFloat(precioArticulo.value);
        un = parseFloat(unidades.value);
        acum += pr * un;
        precioTotal.value = acum.toFixed(2);
    }
    nombreArticulo.value = "";
    precioArticulo.value = "";
    unidades.value = "1";
    importePagoEfectivo.value = precioTotal.value;
    nombreArticulo.focus();
}
/**
 * Permite mostrar textos ocultos si nombre articulo y/o precio estan vacios o precio no es un numero
 */
function mostrarOculto() {
    //Revisar
    if (nombreArticulo.value == "") {
        oculto[0].style.display = "inline";
    } else {
        oculto[0].style.display = "none";
    };

    if (precioArticulo.value == "") {
        oculto[1].style.display = "inline";
    } else {
        oculto[1].style.display = "none";
    };

    if (isNaN(precioArticulo.value)) {
        oculto[2].style.display = "inline";
    } else {
        oculto[2].style.display = "none";
    };
}
/**
 * Permite mostrar textos y cajas ocultas si se selecciona una forma de pago
 */
function mostrarFormaPago() {
    indicePagoSeleccionado = formaPago.selectedIndex;
    opcionPagoSeleccionado = formaPago.options[indicePagoSeleccionado];

    switch (opcionPagoSeleccionado.id) {
        case "tarjeta":
            oculto[3].style.display = "inline";
            oculto[4].style.display = "none";
            break;
        case "efectivo":
            oculto[4].style.display = "inline";
            oculto[3].style.display = "none";
            break;
        default:
            oculto[3].style.display = "none";
            oculto[4].style.display = "none";

    }
}

/**
 * Habilita el boton imprimir si marca el checkbox
 */
function habilitarBotonImprimir() {

    if(condiciones.checked==true){
    botonImprimir.disabled = false;
    iconoImprimir.disabled = false;
    }else{ 
        botonImprimir.disabled = true;
        iconoImprimir.disabled = true;
    }
}

/**
 * Reestablece todos los datos del formulario para comenzar de nuevo con la compra
 */
 function restrablecer(){
    nombreArticulo.value="";
    precioArticulo.value="";
    unidades.value=1;
    articulosCarrito.value="";
    precioTotal.value=0;
    acumulado=0;
    titularTarjeta.value="";
    numeroTarjeta.value="";
    cvvTarjeta.value="";
    importePagoEfectivo.value="";
    formaPago.selectedIndex=0;
    mostrarFormaPago();
    condiciones.checked=false;
    habilitarBotonImprimir();
    nombreArticulo.focus();
}

/**
 * Muestra una ventana emergente con los datos de la compra, si se ha seleccionado metodo
 * de pago finaliza e inicia una nueva compra, en caso contrario solicita que seleccione
 * el metodo de pago.
 */
function listarTicket(){
    if(formaPago.value== "Tarjeta" || formaPago.value== "Efectivo"){
    alert("Esta pagina dice \n" + "Los articulos de mi carrito son: " + articulosCarrito.value + 
    "\nEl precio total es: " + precioTotal.value + "\nForma de pago: " + formaPago.value );
    restrablecer();
    precioTotal.value="";
    } else{
        alert("Esta pagina dice \n Seleccione una forma de pago");
    }
}


window.addEventListener("load", () => {

    inicializar();
    botonAñadir.addEventListener("click", mostrarOculto);
    botonAñadir.addEventListener("click", añadirTotalesArticulosPrecio);
    formaPago.addEventListener("change", mostrarFormaPago);
    condiciones.addEventListener("change", habilitarBotonImprimir);
    botonImprimir.addEventListener("click", listarTicket);
    iconoImprimir.addEventListener("click", listarTicket);
    botonRestablecer.addEventListener("click", restrablecer);
    iconoRestablecer.addEventListener("click", restrablecer);
})