



function AñadirCarrito(evt){
    evt.preventDefault();
    
    
    let nombre = document.getElementById("nombre").value;
    let opcion =  nombre + "," ;
    let lista = document.getElementById("conteo");
    lista.innerHTML += opcion;


    
    let precio = document.getElementById("precio").value;
    let cantidad = document.getElementById("cantidad").value;
    
   
    
    let lista2 = document.getElementById("conteo2");
    
    let opcion2=  precio * cantidad;
    let todo= 0
    todo += opcion2;
    lista2.innerHTML = todo;
        

    
    
    


}

function Tarjeta(evt){
    
let Ta= document.getElementById("OPtarjeta");
         
   
    
}

function Efectivo(evt){
    
}

