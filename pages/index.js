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

    window.addEventListener("scroll", () => {
        var widgetEl = document.getElementById("animacion__widget");
        var posicionWidget = widgetEl.getBoundingClientRect().top;
        console.log(posicionWidget);
        var tamañoPantalla = window.innerHeight * 0.9;
        console.log(tamañoPantalla);

        if (posicionWidget < tamañoPantalla) {
            widgetEl.style.animation = "mover 1s ease-out";
        }

        var headerEl = document.querySelector(".header-contenedor");
        var icoEl = document.querySelector(".contacto__ico");
        icoEl.classList.toggle("abajito", window.scrollY > 0);
        var textNav = document.querySelector(".nav-custom").children;
        headerEl.classList.toggle("abajo", window.scrollY > 0);
        for (const t of textNav) {
            t.classList.toggle("down", window.scrollY > 0);
        }
    });
}
main()