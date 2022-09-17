let divConfirmation = document.getElementById("confirmation");

let products = [];

document
  .getElementById("agregarProducto")
  .addEventListener("click", (addProductos) => {
    addProductos.preventDefault();

    let quantityNew = document.getElementById("cantidad");
    let quantityN = quantityNew.value;

    if (quantityN !== "" && quantityN !== "0") {
      // let product = {};
      let product = [];

      let sizeNew = document.getElementById("select_talla");
      let sizeN = sizeNew.value;
      // product["talla"] = sizeN;
      product.push(sizeN);

      let designN;
      if (document.getElementById("polera1").checked) {
        designN = polera1.value;
      } else if (document.getElementById("polera2").checked) {
        designN = polera2.value;
      } else if (document.getElementById("polera3").checked) {
        designN = polera3.value;
      }
      // product["disenio"] = designN;
      product.push(designN);

      let colorN;
      if (document.getElementById("blanco").checked) {
        colorN = blanco.value;
      } else if (document.getElementById("negro").checked) {
        colorN = negro.value;
      } else if (document.getElementById("rojo").checked) {
        colorN = rojo.value;
      }
      // product["color"] = colorN;
      product.push(colorN);

      // let quantityNew = document.getElementById("cantidad");
      // let quantityN = quantityNew.value;
      // product["cantidad"] = quantityN;
      product.push(quantityN);

      // product["precio"] = 15;
      let precio = 13.99;
      product.push(precio);

      product.push(parseFloat(quantityN) * precio);

      products.push(product);
      alert("Agregado satisfactoriamente");

      let notDesable = document.querySelector(".disabled");
      notDesable.removeAttribute("disabled");
      notDesable.classList.remove("disabled");
    } else {
      alert("Ingrese una cantidad de prenda por favor!");
    }
  });
// console.log(products);
// let pedidos = [];
// function mmm() {
//   for (let i = 0; i < products.length; i++) {
//     const element = products[i];
//     if (products) {
//       pedidos.push(Object.values(element));
//     }
//   }
//   console.log(pedidos);
// }

document.querySelector("#formulario").addEventListener("submit", (e) => {
  e.preventDefault();

  //muestra interfas "confirmar"
  divConfirmation.classList.remove("hidden");

  //captura de datos
  const datos = Object.fromEntries(new FormData(e.target));
  const data = JSON.stringify(datos);
  let info = JSON.parse(data);

  let nombre = info.nombre;
  let direc = info.direccion;
  // let talla = info.talla;
  // let polera = info.polera;
  // let colores = info.colores;
  // let cantidad = info.cantidad;

  //actualiza datos
  let numeroOrden = Math.floor(Math.random() * 1000); //Generar el numero de pedido
  let numOrder = document.getElementById("numOrder");
  numOrder.innerText = numeroOrden;

  let name = document.getElementById("name");
  name.innerText = nombre;

  const fecha = new Date();
  const dia = fecha.getDay();
  const mes = fecha.getMonth();
  const anio = fecha.getFullYear();
  const fechaActual = `${dia} - ${mes + 1} - ${anio}`;
  let fechaPedido = document.getElementById("date");
  fechaPedido.innerText = fechaActual;

  let direccion = document.getElementById("direction");
  direccion.innerText = direc;

  let totalSum = 0;

  // let size = document.getElementById("size");
  // size.innerText = talla;

  // let design = document.getElementById("design");
  // design.innerText = polera;

  // let color = document.getElementById("color");
  // color.innerText = colores;

  // let quantity = document.getElementById("quantity");
  // quantity.innerText = cantidad;

  // let dataTable = document.getElementById(dataTable);

  // const p = document.createElement("p");
  // let newContent = "Hola que tal";
  // p.textContent = newContent; //añade texto al div creado.
  // // añade el elemento creado y su contenido al DOM
  // document.getElementById("dataTable").appendChild(p);

  for (let index = 0; index < products.length; index++) {
    let pedidoObj = products[index];

    for (let i = 0; i < pedidoObj.length; i++) {
      const p = document.createElement("p");
      let newContent = pedidoObj[i];

      // añade el elemento creado y su contenido al DOM

      if (i === 4 || i === 5) {
        p.textContent = `£ ${newContent}`; //añade texto al div creado.
        document.getElementById("dataTable").appendChild(p);
      } else {
        p.textContent = newContent; //añade texto al div creado.
        document.getElementById("dataTable").appendChild(p);
      }

      if (i == pedidoObj.length - 1) {
        totalSum += parseFloat(pedidoObj[i], 2);
      }
    }
  }

  let total = document.getElementById("total");
  total.innerText = `£ ${totalSum} `;

  function enviar() {
    divConfirmation.className = `${divConfirmation.className} hidden`;
  }
});
