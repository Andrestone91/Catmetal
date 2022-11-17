function componentsReusables() {
    const headerEl = document.querySelector(".contenedor-Header")
    addHeader(headerEl)
    const footerEl = document.querySelector(".contenedor-footer")
    addFooter(footerEl)
}
function main() {
    componentsReusables()
    const bienvenidaEl = document.querySelector(".bienvenida")
    const bienvenidaCEl = document.querySelector(".bienvenida__contenedor")

}
main()