document.addEventListener("DOMContentLoaded", function () {
    const header = document.createElement('header');
    const head = document.querySelector('head');
    head.innerHTML += `<link rel="stylesheet" href="/assets/style/header.css">`
    header.innerHTML = `
        <nav id="navigation">
            <a href="/index.html#home" class="logo">
                Atelie Cleide Arts
                <p>Cleide Marthos</p>
            </a>
            <ul id="nav-menu">
                <li class="nav-item"><a href="/index.html#home">Home</a></li>
                <li class="nav-item"><a href="/index.html#Produtos">Produtos</a></li>
                <li class="nav-item"><a href="#Sobre">Sobre</a></li>
                <li class="nav-item"><a href="#Contato">Contato</a></li>
            </ul>
            <div id="menu">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </nav>
    `;
    
    document.body.prepend(header);
});
