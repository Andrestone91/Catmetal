function addHeader(ele) {
    const headerEl = document.createElement("div");
    headerEl.innerHTML = `
    <div class="contenedor">
    <div class="contenedor__img">
    <img class="contenedor__img-logo" src="./assets/logo_catm.png">
    </div>
    <div></div>
    </div>
    `
    ele.appendChild(headerEl)
}