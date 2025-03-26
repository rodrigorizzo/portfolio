const projH2 = document.querySelectorAll('#projetos h3');
const YSobre = document.querySelector('#sobre').offsetTop;
const sobre = document.querySelector('#sobre p');

console.log("Ysobre="+ YSobre);

window.addEventListener('scroll', scrollTeste, false);


function scrollTeste() {
    console.log(window.pageYOffset);
    if (YSobre > window.pageYOffset && window.pageYOffset < YSobre + 60) {
        sobre.setAttribute('style', 'display: block;'); 
    }else{
        sobre.setAttribute('style', 'display: none;');
    }
}