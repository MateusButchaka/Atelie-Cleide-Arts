document.addEventListener('DOMContentLoaded', function () {
    const containers = [];
    let currentPage = 0; 
    const itemsPerPage = 12; 
    const items = []; 

    function showPage(pageId) {
        containers.forEach((pagina, index) => {
            if (index === pageId) {
                pagina.container.classList.remove("container-products-none");
                pagina.container.classList.add("container-products-flex");
            } else {
                pagina.container.classList.remove("container-products-flex");
                pagina.container.classList.add("container-products-none");
            }
        });

        if (pageId > currentPage || pageId < currentPage) {
            containers[pageId].container.classList.add("animation");
        }
        currentPage = pageId; 
    }
    function carregarProdutos() {
        const vitrine = document.querySelector("#home-product");
        let container;
    
        fetch('/json/produto.json') 
            .then((response) => response.json())
            .then((data) => {
                items.push(...data); 
    
                for (let i = 0; i < items.length; i++) {
                    if (i % itemsPerPage === 0) {
                        container = document.createElement("section");
                        container.classList.add("container-products-none");
                        containers.push({ container });
                        vitrine.appendChild(container);
                    }
                    const productId = items[i].id; 
                    const productLink = `./view/pages/produto.html?id=${productId}`;
    
                    container.innerHTML += `
                        <section class="product">
                            <a href="${productLink}">
                                <section class="product-img">
                                    <img src="${items[i].img}" alt="Imagem Macacão">
                                </section>
                                <section class="product-text">
                                    <h4>${items[i].nome}</h4>
                                    <h3>R$ ${items[i].preco.toFixed(2)}</h3>
                                </section>
                                <button class="btn">Ver Produto</button>
                            </a>
                        </section>`;
                }
    
                containers[0].container.classList.remove("container-products-none");
                containers[0].container.classList.add("container-products-flex");
                adicionarBotoesPaginacao(); 
            })
            .catch((error) => {
                console.error("Erro ao carregar produtos:", error);
            });
    }
    function adicionarBotoesPaginacao() {
        const botoes = document.querySelector("#btn-vitrine-page");

        for (let i = 0; i < containers.length; i++) {
            const bottomPage = document.createElement("article");
            bottomPage.classList.add("botao");
            bottomPage.innerHTML = `<p>${i + 1}</p>`;
            bottomPage.addEventListener("click", function () {
                containers.forEach((container) => {
                    container.container.classList.add("page-animation");
                });
                showPage(i);
            });
            botoes.appendChild(bottomPage);
        }
    }
    carregarProdutos();
});
