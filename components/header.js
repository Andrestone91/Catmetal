function addHeader(ele) {
    const headerEl = document.createElement("div");
    headerEl.innerHTML = `
    <div class="contenedor">
    <div class="contenedor__img">
    <img class="contenedor__img-logo" src="../assets/CATMETAL-1.png">
    </div>
    <div></div>
    </div>
    `
    ele.appendChild(headerEl)
}