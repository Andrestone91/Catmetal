function addHeader(ele) {
    const headerEl = document.createElement("div");
    headerEl.innerHTML = `
    <div class="contenedor">
    <div class="contenedor__img">
    <img class="contenedor__img-logo" src="./assets/Catmetal-logo-2.jpg">
    </div>
    <div>
    <a href=".index.html"></a>asdasd</div>
    <div></div>
    <div></div>
    </div>
    `
    ele.appendChild(headerEl)
}