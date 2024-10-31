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

// Guardar el array de objetos a local
const guardarArray = (clave, valor) => {localStorage.setItem(clave, valor)};
for (const instrumento of instrumentos){
    guardarArray(instrumento.id, JSON.stringify(instrumento));
}

// Modificando DOM
let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", formulaioEnviado);
function formulaioEnviado(e){
    let infoFormulario = e.target;
    let numForm = infoFormulario.children[0].value;
    let deStringAInt = parseInt(numForm);
    let numId = instrumentos.find(instrumento => instrumento.id === deStringAInt);
    e.preventDefault();
    console.log("Formulario enviado");
    let parr = document.createElement ("h2");
    parr.innerHTML = "El valor es $" + numId.precio;
    document.body.append(parr);
}

