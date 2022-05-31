
var navbar = document.querySelector("header");
var inicio = document.getElementById("menu-inicio")
var servicos = document.getElementById("menu-servicos")
var sobre = document.getElementById("menu-sobre")
var contato = document.getElementById("menu-contato")
var botao = document.querySelector(".botao-nav")


//Scroll suave ao clicar em algum botão do menu

function smoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]')

    if(links.length) {
        function scrollToSection(event){
            event.preventDefault()
            
            const href = event.currentTarget.getAttribute("href")
            const section = document.querySelector(href)

            section.scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
        }

        links.forEach((item) => {
            item.addEventListener("click", scrollToSection)
        })
    }
}

smoothScroll()


// Header muda de cor ao scrollar

document.addEventListener("scroll", function() {
    var posicaoY = window.pageYOffset
    if (posicaoY == 0) {
        navbar.style.backgroundColor = "#fad2e1";
        inicio.style.color = "#910D3F";
        servicos.style.color = "#910D3F";
        sobre.style.color = "#910D3F";
        contato.style.color = "#910D3F";
        inicio.classList.remove("after");
        servicos.classList.remove("after");
        sobre.classList.remove("after");
        contato.classList.remove("after");
        botao.style.borderColor = "#910D3F";
        botao.style.color = "#910D3F"

    } else {
        navbar.style.backgroundColor = "#910D3F";
        inicio.style.color = "#ffffff";
        servicos.style.color = "#ffffff";
        sobre.style.color = "#ffffff";
        contato.style.color = "#ffffff";
        inicio.classList.add("after");
        servicos.classList.add("after");
        sobre.classList.add("after");
        contato.classList.add("after");
        botao.style.borderColor = "#ffffff";
        botao.style.color = "#ffffff"
    }
})


//Mapa na aba contato

var map = L.map('map').setView([-20.368779, -40.319540], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

var marker = L.marker([-20.368779, -40.319540]).addTo(map);





