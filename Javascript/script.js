class Instrumento{
    constructor (id, tipo, precio){
    this.id = parseInt(id);
    this.precio = parseFloat(precio);
    this.disponible = true;
    this.tipo = tipo.toUpperCase();
    }
    iva(){
        this.precio = this.precio * 1.21;
    }
}
const instrumentos = [];
instrumentos.push (new Instrumento("1", "bateria", "1000"));
instrumentos.push (new Instrumento("2", "guitarra", "800"));
instrumentos.push (new Instrumento("3", "bajo", "750"));
instrumentos.push (new Instrumento("4", "microfono", "600" ));
instrumentos.push (new Instrumento("5", "bandoneon", "1100"));
for (const instrumento of instrumentos)
    instrumento.iva();
console.log(instrumentos[1]);
const buscado = prompt("Elija uno de los siguientes instrumentos para saber su precio: BATERIA, GUITARRA, BAJO, MICROFONO O BANDONEON");
buscadoMayus = buscado.toUpperCase();
const encontrado = instrumentos.find(instrumento => instrumento.tipo === buscadoMayus);
if (encontrado === undefined) {
    alert("Por favor recargue la pagina y elija una de las opciones dadas");
}
else{
    alert( "$" + encontrado.precio);
}
