

class HelloWorld extends HTMLElement{
    constructor(){
        super();

        this.saludo = "Hola Mundo";
        this.montado = false;
    }

    // Esto se ejecutará cuando se incorpore a la página
   connectedCallback() {
       console.log("incorporado");
       this.montado = true;
       this.render();
   }

   // Puedo cambiar el atributo una vez montado...
   // Se ejecuta ANTES del connected callback
   attributeChangedCallback(nombre, viejoValor, nuevoValor){
       console.log(`${nombre} ha cambiado de ${viejoValor} a ${nuevoValor}`);
       if ("nombre" == nombre) {
           this.saludo = "Hola "+nuevoValor;
           if (this.montado) this.render();
       }

   }

   // TEngo que especificar un método 
   static get observedAttributes() {
       return ['nombre'];
   }

   render(){
    this.innerHTML="";
    const h1 = document.createElement("h1");
    h1.innerText=this.saludo;
    this.appendChild(h1);
    
   }


   disconnectedCallBack() {
       console.log("Componente desmontado ", this);
       this.montado = false;
   }

}


// Debemos darle, según los estándares, tenemos que usar palabras separadas
// por un guión y W3C garantiza que no incluirá etiquetas con guión

// muchas librería como iron ya empiezan con ifron-


window.customElements.define("hello-world", HelloWorld);