document.addEventListener("DOMContentLoaded", function () {
    const footer = document.createElement('footer');
    const head = document.querySelector('head')
    head.innerHTML += `<link rel="stylesheet" href="/assets/style/footer.css">`
    footer.innerHTML = `
        <div id="Contato"></div>
        <section id="contato">
            <div class="hr"></div>
            <br>
            <section class="contato-content">
                <section class="contato-box">
                    <a href="https://www.instagram.com/ateliecleidearts/">
                        <img src="/assets/images/logo/instagram-logo-facebook-svgrepo-com.svg"> 
                        <p>Instagram/ateliecleidearts</p>
                    </a>
                </section>
                <br>
                <section class="contato-box">
                    <a href="https://api.whatsapp.com/send?phone=5543996448729&text=Oi+Cleide+Arte+um+prazer+em+te+atender+.">
                        <img src="/assets/images/logo/whatsapp-svgrepo-com.svg">
                        <p>WhatsApp</p>
                    </a>
                </section>
            </section>
        </section>
        <div id="Sobre"></div>
        <section id="sobre">
                <section id="container-footer">
                    <section class="footer-box">
                        <h4> A empresa Atelie Cleide Arts localizada em Carlópolis/PR
                            sendo administrada por <strong>Cleide Marthos</strong> foi fundada pela paixão
                            de uma mamãe e o dom em costura, sendo assim, todos os produtos
                            são feitos com muito carinho, amor e dedicação. Para entrar em contato conosco, basta acessar o link do Instangram ou clicar para
                            falar com o vendedor, <b>leva em torno de 1 dia útil para obter resposta.</b></h4>
                    </section>
                    <section class="footer-box">
                        <h4> Todos os produtos são feitos com <strong>algodão e material hipoalérgenico</strong>,
                        portanto, seu bebe não irá ter problemas com desconforto por conta do material.
                        As costuras são resistentes e feitas por maquina profissional com linhas
                        da melhor qualidade. <b>Qualquer dúvida, entrar em contato com o fabricante pelo WhatsApp
                        ou Instagram.</b></h4>
                    </section>
                    <section class="footer-box-maps">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d428.1506037093957!2d-49.719806558034904!3d-23.42731086797882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c1c870f03aa429%3A0xee4b18838fafa211!2sR.%20Benedito%20Sales%2C%20695%20-%20Carl%C3%B3polis%2C%20PR%2C%2086420-000!5e0!3m2!1spt-BR!2sbr!4v1694292593999!5m2!1spt-BR!2sbr" width="300" height="300" style="border:1;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </section>
                </section> 
        </section>
    `;
    document.body.appendChild(footer);
});
