const nav = document.getElementById("nav")
var navbar = document.querySelector("header")
var navegacaoLinks = document.querySelectorAll("#menu-list a")
var botao = document.querySelector(".botao-nav")
var menuList = document.getElementById("menu-list")
var menuListBorder = document.querySelectorAll("#menu-list li")
var imgBtnMobile = document.querySelector(".menu-mobile")


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


// Header muda de cor ao scroll

document.addEventListener("scroll", function() {
    var posicaoY = window.pageYOffset
    if (posicaoY == 0) {
        navbar.style.backgroundColor = "#fad2e1";
        botao.style.borderColor = "#910D3F";
        botao.style.color = "#910D3F"
        menuList.style.backgroundColor = "#fad2e1"
        menuListBorder.forEach(element => {
            element.style.borderColor = "#910D3F"
        })
        navegacaoLinks.forEach(element => {
            element.style.color = "#910D3F"
            element.classList.remove("after")
        })

    } else {
        navbar.style.backgroundColor = "#910D3F";
        botao.style.borderColor = "#ffffff";
        botao.style.color = "#ffffff"
        menuList.style.backgroundColor = "#910D3F"   
        menuListBorder.forEach(element => {
            element.style.borderColor = "#fad2e1";
        })
        navegacaoLinks.forEach(element => {
            element.style.color = "#ffffff"
            element.classList.add("after")
        })
    }
})


//Mapa na aba contato

var map = L.map('map').setView([-20.368779, -40.319540], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

var marker = L.marker([-20.368779, -40.319540]).addTo(map);

//Abrir menu mobile

const btnMobile = document.getElementById("btn-mobile");

function toggleMenu() {
    nav.classList.toggle("active")
    imgBtnMobile.classList.toggle("active")
    if (imgBtnMobile.classList == "menu-mobile") {
        imgBtnMobile.setAttribute("src","./img/menu-mobile.svg")
    } else if (imgBtnMobile.classList == "menu-mobile active") {
        imgBtnMobile.setAttribute("src","./img/Close.svg")
    }
}

btnMobile.addEventListener("click", toggleMenu)

function closeMenu() {
    nav.classList.remove("active")
    imgBtnMobile.classList.remove("active")
    if (imgBtnMobile.classList == "menu-mobile") {
        imgBtnMobile.setAttribute("src","./img/menu-mobile.svg")
    } else if (imgBtnMobile.classList == "menu-mobile active") {
        imgBtnMobile.setAttribute("src","./img/Close.svg")
    }
}

navegacaoLinks.forEach(element => {
    element.addEventListener("click", closeMenu)
})



