function addHeader(ele) {
  const headerEl = document.createElement("div");
  headerEl.innerHTML = `<div class="header-contenedor">
    <a href="./index.html">
      <img src="./assets/Catmetal-logo.jpg" alt="" class="contenedor__img-logo " />
    </a>
   <div class="nav-custom">
    <a href="#nosotros" class="text-nav">Nosotros</a>
    <a href="#servicios" class="text-nav">Servicios</a>
    <a href="#contacto" class="text-nav">Contacto</a>
    </div>
    <button class="abre-ventana"></button>
    <div class="ventana">
      <div class="ventana__contenedor-boton">
        <button class="ventana__cierra-ventana"></button>
      </div>
      <div class="ventana__contenido">
        <a class="ventana__text" href="#nosotros">¿Quienes somos?</a>
        <a class="ventana__text" href="#servicios">Servicios</a>
        <a class="ventana__text" href="#contacto">Contacto</a>
        <img class="ventana__cruz" src="./assets/cruz.svg" alt="" />
      </div>
    </div>
    <img class="burger" src="./assets/burger.png" alt="" />
  </div>`;

  ele.appendChild(headerEl);

  const ventanaEl = document.querySelector(".ventana");
  const cerrar = document.querySelector(".ventana__contenido").children

  const botonAbreVentana = document.querySelector(".abre-ventana");

  const botonCierraVentana = document.querySelector(".ventana__cierra-ventana");

  botonAbreVentana.addEventListener("click", () => {
    ventanaEl.style.display = "block";
  });
  botonCierraVentana.addEventListener("click", () => {
    ventanaEl.style.display = "none";
  });
  for (const c of cerrar) {
    c.addEventListener("click", () => {
      ventanaEl.style.display = "none";
    })
  }
}