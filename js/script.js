const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(){
    const nav = document.getElementById('cabecalho_nav');
    nav.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu);