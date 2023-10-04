function showModal(){
    const modal = document.querySelector(".modal");
    const open = document.querySelector(".img-product");
    const close = document.querySelector(".close");

    open.addEventListener("click", ()=>{
        modal.classList.add("display-flex");
    });
    close.addEventListener("click", ()=>{
        modal.classList.remove("display-flex");
    });
}
showModal()


