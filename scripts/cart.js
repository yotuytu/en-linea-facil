function mostrarNotificacion(mensaje) {
  const noti = document.createElement('div');
  noti.className = 'notificacion-carrito';
  noti.innerText = mensaje;
  document.body.appendChild(noti);

  setTimeout(() => {
    noti.classList.add('visible');
  }, 10);

  setTimeout(() => {
    noti.classList.remove('visible');
    setTimeout(() => document.body.removeChild(noti), 500);
  }, 2500);
}

function agregarAlCarrito(nombre, precio) {
  const item = { nombre, precio };
  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  carrito.push(item);
  localStorage.setItem('carrito', JSON.stringify(carrito));
  mostrarNotificacion(`${nombre} fue agregado al carrito`);
  actualizarCarrito();
}

function actualizarCarrito() {
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  const carritoDiv = document.getElementById("carrito");
  const totalP = document.getElementById("total");
  carritoDiv.innerHTML = "";
  let total = 0;

  carrito.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "item-carrito";
    div.innerHTML = `
      <span>${item.nombre} - S/. ${item.precio}</span>
      <button onclick="eliminarDelCarrito(${index})">Eliminar</button>
    `;
    carritoDiv.appendChild(div);
    total += item.precio;
  });

  totalP.innerText = `Total: S/. ${total.toFixed(2)}`;
}

function eliminarDelCarrito(index) {
  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  carrito.splice(index, 1);
  localStorage.setItem('carrito', JSON.stringify(carrito));
  actualizarCarrito();
}

function vaciarCarrito() {
  localStorage.removeItem('carrito');
  actualizarCarrito();
}
document.addEventListener("DOMContentLoaded", actualizarCarrito);
function agregarAlCarrito(nombre, precio) {
  // Recuperar el carrito actual del localStorage
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  // Agregar el nuevo producto al carrito
  carrito.push({ nombre, precio });

  // Guardar el carrito actualizado en el localStorage
  localStorage.setItem("carrito", JSON.stringify(carrito));

  // Mostrar notificación (opcional)
  mostrarNotificacion("Producto agregado al carrito");
}