function componentsReusables() {
    const headerEl = document.querySelector(".contenedor-Header")
    addHeader(headerEl)
    const footerEl = document.querySelector(".contenedor-footer")
    addFooter(footerEl)
}
function botonEvento() {
    const botonVolver = document.querySelector(".btn__volver")
    const botonEl = document.querySelector(".btn")
    botonEl.addEventListener("click", () => {
        botonVolver.style.display = "inline-block"
    })
    botonVolver.addEventListener("click", () => {
        botonVolver.style.display = "none"
    })

}
function main() {
    componentsReusables()
    botonEvento()
    const bienvenidaEl = document.querySelector(".bienvenida")
    const bienvenidaCEl = document.querySelector(".bienvenida__contenedor")
}
main()